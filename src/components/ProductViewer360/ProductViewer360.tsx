import { Loader2, ZoomIn, ZoomOut, Hand, Rotate3D, RefreshCcw } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface ProductViewer360Props {
  /**
   * URL for the 6000x3000px WebP sprite sheet.
   * If not provided, a synthetic placeholder is generated for demonstration.
   */
  imageUrl?: string;
  className?: string;
}

// 18 quadros. Layout: 6 colunas, 3 linhas. Cada frame = 1000x1000.
const TOTAL_FRAMES = 18;
const COLS = 6;
const FRAME_WIDTH = 1000;
const FRAME_HEIGHT = 1000;
const SENSITIVITY_DRAG = 0.04;
const DRAG_MOMENTUM_MULTIPLIER = -1; // Negative because dragging right spins object left typically
const FRICTION = 0.92;
const KEYBOARD_SPEED = 0.15;
const SCROLL_SENSITIVITY = 0.005;

export const ProductViewer360: React.FC<ProductViewer360Props> = ({ imageUrl, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // React State for Zoom UI
  const [isZoomed, setIsZoomed] = useState(false);
  const [mode, setMode] = useState<'rotate' | 'pan'>('rotate');
  // Mirrors state.current.isDragging for render-safe cursor styling (refs can't be read during render)
  const [isDraggingUi, setIsDraggingUi] = useState(false);

  // High-frequency mutable state kept in refs to avoid React re-renders during 60FPS animation
  const state = useRef({
    frame: 0,
    velocity: 0,
    isDragging: false,
    lastX: 0,
    lastY: 0,
    drawnFrame: -1,
    keys: {
      ArrowLeft: false,
      ArrowRight: false,
    },
    // Zoom & Pan states
    zoom: 1,
    targetZoom: 1,
    panX: 0,
    panY: 0,
    targetPanX: 0,
    targetPanY: 0,
  });

  // --- 1. Preload Function with Progress & Synthetic Fallback ---
  useEffect(() => {
    let isMounted = true;
    let fallbackImageUrl = '';

    const createSyntheticPlaceholder = async (): Promise<string> => {
      const canvas = document.createElement('canvas');
      canvas.width = 6000;
      canvas.height = 3000;
      const ctx = canvas.getContext('2d');
      if (!ctx) return '';

      ctx.fillStyle = '#f9fafb'; // tailwind gray-50
      ctx.fillRect(0, 0, 6000, 3000);

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const col = i % COLS;
        const row = Math.floor(i / COLS);
        const x = col * FRAME_WIDTH;
        const y = row * FRAME_HEIGHT;

        // Gradient Background
        const grad = ctx.createLinearGradient(x, y, x + FRAME_WIDTH, y + FRAME_HEIGHT);
        grad.addColorStop(0, '#e5e7eb');
        grad.addColorStop(1, '#d1d5db');
        ctx.fillStyle = grad;
        ctx.fillRect(x, y, FRAME_WIDTH, FRAME_HEIGHT);

        // Draw synthetic 3D looking Cube representation
        ctx.save();
        ctx.translate(x + FRAME_WIDTH / 2, y + FRAME_HEIGHT / 2);

        const rotation = (i / TOTAL_FRAMES) * Math.PI * 2;
        const width = 450 * Math.cos(rotation);
        const height = 450;

        ctx.fillStyle = '#3b82f6'; // blue-500 front
        if (width < 0) ctx.fillStyle = '#1e40af'; // blue-800 back
        ctx.fillRect(-Math.abs(width) / 2, -height / 2, Math.abs(width), height);

        // Text indicator
        ctx.fillStyle = '#1f2937';
        ctx.font = 'bold 90px "JetBrains Mono", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`FRAME ${i + 1}`, 0, -320);
        ctx.restore();
      }

      return new Promise<string>((resolve) => {
        canvas.toBlob((blob) => {
          if (blob) resolve(URL.createObjectURL(blob));
          else resolve('');
        }, 'image/webp', 0.9);
      });
    };

    const loadSpriteSheet = async () => {
      try {
        let finalUrl = imageUrl;

        // If no URL provided, dynamically generate the 6000x3000 placeholder
        if (!finalUrl) {
          setProgress(10);
          fallbackImageUrl = await createSyntheticPlaceholder();
          finalUrl = fallbackImageUrl;
          setProgress(50);
        }

        const img = new Image();
        img.onload = () => {
          if (isMounted) {
            setProgress(100);
            imageRef.current = img;
            // Add a tiny delay to ensure smooth transition off the spinner
            setTimeout(() => setIsLoaded(true), 250);
          }
        };
        img.src = finalUrl!;

      } catch (err) {
        console.error("Failed to load sprite sheet:", err);
      }
    };

    loadSpriteSheet();

    return () => {
      isMounted = false;
      if (fallbackImageUrl) URL.revokeObjectURL(fallbackImageUrl);
    };
  }, [imageUrl]);

  // --- 2. Main Animation Loop (requestAnimationFrame) ---
  useEffect(() => {
    if (!isLoaded || !canvasRef.current) return;

    let reqId: number;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false }); // Optimize for opaque output
    if (!ctx) return;

    const draw = () => {
      const s = state.current;

      // Handle Keyboard Input Priority over Friction
      if (s.keys.ArrowRight) {
        s.velocity = KEYBOARD_SPEED;
      } else if (s.keys.ArrowLeft) {
        s.velocity = -KEYBOARD_SPEED;
      } else if (!s.isDragging) {
        // Apply Inertia / Friction
        s.velocity *= FRICTION;
        // Optimization: stop processing mathematically completely if almost zero
        if (Math.abs(s.velocity) < 0.001) s.velocity = 0;
      }

      // Update frame counter
      if (s.velocity !== 0) {
        s.frame += s.velocity;

        // Infinite Loop constraints
        while (s.frame < 0) s.frame += TOTAL_FRAMES;
        s.frame = s.frame % TOTAL_FRAMES;
      }

      // Zoom & Pan Smooth Animations (calculates every frame)
      s.zoom += (s.targetZoom - s.zoom) * 0.15;
      s.panX += (s.targetPanX - s.panX) * 0.2;
      s.panY += (s.targetPanY - s.panY) * 0.2;

      // Apply fast CSS transform outside React tree explicitly to avoid lag
      if (
        Math.abs(s.targetZoom - s.zoom) > 0.001 ||
        Math.abs(s.targetPanX - s.panX) > 0.001 ||
        Math.abs(s.targetPanY - s.panY) > 0.001
      ) {
        if (canvas) {
          canvas.style.transform = `scale(${s.zoom}) translate(${s.panX}px, ${s.panY}px)`;
        }
      }

      const frameIndexAsInt = Math.floor(s.frame);

      // Only execute draw operations if the frame actually changed to save GPU cycles
      if (frameIndexAsInt !== s.drawnFrame && imageRef.current) {
        const col = frameIndexAsInt % COLS;
        const row = Math.floor(frameIndexAsInt / COLS);
        const sourceX = col * FRAME_WIDTH;
        const sourceY = row * FRAME_HEIGHT;

        ctx.drawImage(
          imageRef.current,
          sourceX,
          sourceY,
          FRAME_WIDTH,
          FRAME_HEIGHT,
          0,
          0,
          canvas.width,
          canvas.height
        );
        s.drawnFrame = frameIndexAsInt;
      }

      reqId = requestAnimationFrame(draw);
    };

    // Kickoff loop and force initial draw
    state.current.velocity = 0.0001; // tiny nudge to draw frame 0
    reqId = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(reqId);
  }, [isLoaded]);

  // --- 3. Keyboard Listeners ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') state.current.keys.ArrowLeft = true;
      if (e.key === 'ArrowRight') state.current.keys.ArrowRight = true;
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') state.current.keys.ArrowLeft = false;
      if (e.key === 'ArrowRight') state.current.keys.ArrowRight = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // --- 4. Pointer (Mouse + Touch) Listeners ---
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    state.current.isDragging = true;
    state.current.lastX = e.clientX;
    state.current.lastY = e.clientY;
    state.current.velocity = 0; // Cut off previous inertia
    setIsDraggingUi(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!state.current.isDragging) return;

    const deltaX = e.clientX - state.current.lastX;
    const deltaY = e.clientY - state.current.lastY;
    state.current.lastX = e.clientX;
    state.current.lastY = e.clientY;

    if (mode === 'pan' && state.current.targetZoom > 1) {
      // Panning mode
      state.current.targetPanX += deltaX / state.current.targetZoom;
      state.current.targetPanY += deltaY / state.current.targetZoom;

      // Fast follow immediately without easing during drag
      state.current.panX = state.current.targetPanX;
      state.current.panY = state.current.targetPanY;

      // Apply the transform directly: target and current are equal here
      // (fast follow, no easing), so the animation loop's diff-based gate
      // would never detect a change and the canvas would never repaint.
      if (canvasRef.current) {
        canvasRef.current.style.transform = `scale(${state.current.zoom}) translate(${state.current.panX}px, ${state.current.panY}px)`;
      }
    } else {
      // Rotating mode
      const frameDelta = deltaX * SENSITIVITY_DRAG * DRAG_MOMENTUM_MULTIPLIER;
      state.current.frame += frameDelta;
      state.current.velocity = frameDelta;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    state.current.isDragging = false;
    setIsDraggingUi(false);
  };

  const handleDoubleClick = () => {
    if (isZoomed) {
      handleResetZoom();
    } else {
      state.current.targetZoom = 2.5; // Quick zoom
      setIsZoomed(true);
    }
  };

  // --- 5. Mouse Wheel Listener ---
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isLoaded || !canvasRef.current) return;
      e.preventDefault(); // Stop screen scrolling

      if (e.ctrlKey || e.metaKey || e.shiftKey) {
        // Zooming logic
        state.current.targetZoom = Math.max(1, Math.min(4, state.current.targetZoom - e.deltaY * 0.01));
        if (state.current.targetZoom <= 1) {
          state.current.targetPanX = 0;
          state.current.targetPanY = 0;
        }

        // Sync React UI state efficiently
        const nowZoomed = state.current.targetZoom > 1;
        setIsZoomed(prev => {
          if (prev !== nowZoomed) {
            if (!nowZoomed) setMode('rotate');
            return nowZoomed;
          }
          return prev;
        });

      } else {
        // Rotation logic
        state.current.velocity += e.deltaY * SCROLL_SENSITIVITY;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isLoaded]);

  // --- 6. UI Controls ---
  const handleZoomIn = () => {
    state.current.targetZoom = Math.min(4, state.current.targetZoom + 0.5);
    setIsZoomed(true);
  };

  const handleZoomOut = () => {
    state.current.targetZoom = Math.max(1, state.current.targetZoom - 0.5);
    if (state.current.targetZoom <= 1) {
      state.current.targetPanX = 0;
      state.current.targetPanY = 0;
      setMode('rotate');
      setIsZoomed(false);
    }
  };

  const handleResetZoom = () => {
    state.current.targetZoom = 1;
    state.current.targetPanX = 0;
    state.current.targetPanY = 0;
    setMode('rotate');
    setIsZoomed(false);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-square overflow-hidden bg-white select-none ${className}`}
      style={{ touchAction: 'none' /* Prevents mobile scroll while dragging */ }}
    >
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-50/90 backdrop-blur-sm">
          <Loader2 className="w-12 h-12 mb-4 text-blue-600 animate-spin" />
          <div className="text-sm font-medium tracking-wide text-gray-500 uppercase">
            Carregando Asset WebP... {progress ? `${progress}%` : ''}
          </div>
          <div className="w-48 h-1.5 mt-4 overflow-hidden bg-gray-200 rounded-full">
            <div
              className="h-full transition-all duration-300 ease-out bg-blue-600 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Main Canvas Segment */}
      <canvas
        ref={canvasRef}
        width={FRAME_WIDTH}
        height={FRAME_HEIGHT}
        className={`w-full h-full object-contain origin-center will-change-transform ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${isDraggingUi ? 'cursor-grabbing' : (mode === 'pan' && isZoomed ? 'cursor-move' : 'cursor-grab')} transition-opacity duration-500`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onDoubleClick={handleDoubleClick}
      />

      {/* Zoom UI Toolbar Overlay */}
      {isLoaded && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-2 bg-white/85 backdrop-blur-md border border-slate-200 shadow-md rounded-full z-20 transition-all">
          <button onClick={handleZoomOut} className="p-4 rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition focus:outline-none" title="Reduzir Zoom (Ctrl + Scroll)">
            <ZoomOut className="w-6 h-6" />
          </button>

          <button onClick={handleZoomIn} className="p-4 rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition focus:outline-none" title="Ampliar Zoom (Duplo Clique)">
            <ZoomIn className="w-6 h-6" />
          </button>

          {isZoomed && (
            <>
              <div className="w-px h-8 bg-slate-300/80 mx-1.5"></div>

              <button onClick={() => setMode('rotate')} className={`p-4 rounded-full transition focus:outline-none ${mode === 'rotate' ? 'bg-blue-100/90 text-blue-700 shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`} title="Modo Rotação">
                <Rotate3D className="w-6 h-6" />
              </button>

              <button onClick={() => setMode('pan')} className={`p-4 rounded-full transition focus:outline-none ${mode === 'pan' ? 'bg-blue-100/90 text-blue-700 shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`} title="Modo de Movimento Livre">
                <Hand className="w-6 h-6" />
              </button>

              <div className="w-px h-8 bg-slate-300/80 mx-1.5"></div>

              <button onClick={handleResetZoom} className="p-4 rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition focus:outline-none" title="Restaurar Visão Normal">
                <RefreshCcw className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
