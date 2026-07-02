/**
 * UI Initiative Material You Slider
 * Converted to TypeScript for use with Swiper/React
 */

function elementTransitionEnd(el: HTMLElement, callback: (e: TransitionEvent) => void) {
  function fireCallBack(e: TransitionEvent) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack as EventListener);
  }
  el.addEventListener('transitionend', fireCallBack as EventListener);
}

function effectVirtualTransitionEnd({ swiper, duration, transformElements, allSlides }: any) {
  const { activeIndex } = swiper;
  const getSlide = (el: any) => {
    if (!el.parentElement) {
      const slide = swiper.slides.filter(
        (slideEl: any) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode,
      )[0];
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget: any[];
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter((transformEl: any) => {
        const el = transformEl.classList.contains('swiper-slide-transform')
          ? getSlide(transformEl)
          : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach((el: any) => {
      elementTransitionEnd(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true,
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}

export default function EffectMaterial({ swiper, on, extendParams }: any) {
  extendParams({
    materialEffect: {
      slideSplitRatio: 0.65,
    },
  });

  const setTranslate = () => {
    const { slides, slidesSizesGrid, params, size: swiperSize, rtlTranslate: rtl } = swiper;
    const { spaceBetween, cssMode, centeredSlides } = params;
    let { slidesPerView } = params;
    const { slideSplitRatio } = params.materialEffect;

    const isCenteredBetween =
      centeredSlides &&
      Math.ceil(slidesPerView) % 2 === 1 &&
      Math.ceil(slidesPerView) - Math.floor(slidesPerView) === 1;
    if (isCenteredBetween) slidesPerView = Math.floor(slidesPerView);

    const isFloatSPV = centeredSlides && parseInt(slidesPerView, 10) !== slidesPerView;
    const slidesPerViewRounded = centeredSlides ? Math.ceil(slidesPerView) : slidesPerView;
    const isCenteredOdd = centeredSlides && slidesPerViewRounded % 2 === 1;
    const isCenteredEven = centeredSlides && slidesPerViewRounded % 2 === 0;
    const rtlMultiplier = rtl ? -1 : 1;

    let largeSlideRatio = centeredSlides
      ? isFloatSPV ? (slidesPerView - Math.floor(slidesPerView)) / 2 : 0.5
      : Math.min(Math.max(slideSplitRatio, 0), 1);
    let smallSlideRatio = centeredSlides
      ? isFloatSPV ? (slidesPerView - Math.floor(slidesPerView)) / 2 : 0.5
      : 1 - Math.min(Math.max(slideSplitRatio, 0), 1);
    let smallSlideRatioNormalize = isFloatSPV ? 0.5 + (0.5 - smallSlideRatio) : smallSlideRatio;

    if (isCenteredBetween) {
      const slidesInCenter = Math.floor(params.slidesPerView) - 1;
      largeSlideRatio = (params.slidesPerView - slidesInCenter) / 2;
      smallSlideRatio = largeSlideRatio;
      smallSlideRatioNormalize = 0.5 + (0.5 - smallSlideRatio);
    }

    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const materialEl = slideEl.querySelector('.swiper-material-wrapper');
      const opacityEls = slideEl.querySelectorAll('.swiper-material-animate-opacity');
      const scaleEls = slideEl.querySelectorAll('[data-swiper-material-scale]');
      const progress = -slideEl.progress + (rtl && !centeredSlides ? slidesPerView - 1 : 0);
      const offset =
        slideEl.swiperSlideOffset -
        (rtl ? (swiper.slidesSizesGrid[0] + spaceBetween) * (slidesPerView - 1) : 0);
      const swiperTranslate = swiper.translate;
      let scale: number;
      let translate = 0;
      let opacity = 0;
      const currentSlideSize = slidesSizesGrid[i];
      const scaleDiff =
        smallSlideRatio === 0 && !centeredSlides ? 0 : spaceBetween / currentSlideSize;
      const cssModeTranslateOffset = cssMode ? swiperTranslate : 0;

      if (progress <= 0) {
        if (centeredSlides && slidesPerView > 1) {
          if (progress <= 0 && progress >= -(slidesPerViewRounded - 2)) {
            translate = swiperTranslate; scale = 1; opacity = 1;
          }
          if (isCenteredOdd && progress < -(slidesPerViewRounded - Math.ceil(slidesPerViewRounded / 2))) {
            const cp = Math.ceil(slidesPerViewRounded / 2) - Math.abs(progress);
            scale = cp; opacity = scale ** 4;
            translate = swiperTranslate + currentSlideSize * (1 - cp) * (1 + scaleDiff * 2) * rtlMultiplier;
          }
          if (isCenteredEven && progress < -(slidesPerViewRounded / 2 - 1) && progress >= -(slidesPerViewRounded / 2)) {
            const cp = slidesPerViewRounded / 2 - Math.abs(progress);
            scale = largeSlideRatio - scaleDiff + (smallSlideRatioNormalize + scaleDiff * 2) * (slidesPerViewRounded / 2 - Math.abs(progress));
            opacity = ((scale - largeSlideRatio) / (1 - largeSlideRatio)) ** 4;
            translate = swiperTranslate + currentSlideSize * (smallSlideRatioNormalize + scaleDiff) * (1 - cp) * rtlMultiplier;
          }
          if (isCenteredEven && progress < -slidesPerViewRounded / 2) {
            let cp = slidesPerViewRounded / 2 + 1 - Math.abs(progress);
            scale = 0;
            if (cp >= 0) {
              cp = -scaleDiff * 2 + cp * (1 + scaleDiff * 2);
              cp = Math.max(Math.min(cp, 1), 0);
              scale = (smallSlideRatio - scaleDiff) * cp;
            }
            translate = swiperTranslate + currentSlideSize * rtlMultiplier * (smallSlideRatioNormalize + scaleDiff) * (2 - cp) + currentSlideSize * rtlMultiplier * (smallSlideRatio - scaleDiff) * (1 - cp);
          }
        } else {
          scale = 1 + progress; translate = -offset; opacity = scale ** 4;
        }
      }
      if (slidesPerView === 1) {
        if (progress > 0) {
          scale = 1 - progress;
          translate = -offset + swiperSize * Math.min(progress, 1) * rtlMultiplier;
          opacity = scale ** 4;
        }
      } else {
        if (progress > 0 && progress <= slidesPerView - 2) {
          translate = swiperTranslate; scale = 1; opacity = 1;
        }
        const isLargeToCurrent = isCenteredEven
          ? progress > slidesPerViewRounded / 2 - 1 && progress <= slidesPerViewRounded / 2
          : progress > slidesPerViewRounded - 2 && progress <= slidesPerViewRounded - 1;
        if (isLargeToCurrent) {
          const minus = isCenteredEven ? Math.floor(slidesPerViewRounded / 2) : 1;
          scale = largeSlideRatio - scaleDiff + (smallSlideRatioNormalize + scaleDiff * 2) * (slidesPerViewRounded - minus - Math.abs(progress));
          translate = swiperTranslate;
          opacity = largeSlideRatio === 1 ? scale ** 4 : ((scale - largeSlideRatio) / (1 - largeSlideRatio)) ** 4;
        }
        if (isCenteredOdd && progress > slidesPerView - Math.ceil(slidesPerView / 2)) {
          const cp = Math.ceil(slidesPerView / 2) - (slidesPerView - Math.abs(progress));
          translate = swiperTranslate - currentSlideSize * (scaleDiff * 2) * cp;
          scale = 1 - cp; opacity = scale ** 4;
        }
        if (progress > slidesPerView - 1 && progress <= slidesPerView && !centeredSlides) {
          const cp = slidesPerView - Math.abs(progress);
          const largeWithDiff = largeSlideRatio - scaleDiff;
          const smallWithDiff = smallSlideRatio - scaleDiff;
          scale = smallWithDiff + (largeWithDiff - smallWithDiff) * cp;
          translate = swiperTranslate - currentSlideSize * (smallSlideRatio + scaleDiff) * (1 - cp) * rtlMultiplier;
          if (smallSlideRatio === 0) opacity = scale ** 4;
        }
        if (progress > (centeredSlides ? slidesPerViewRounded / 2 : slidesPerViewRounded) && !isCenteredOdd) {
          let cp = (centeredSlides ? slidesPerViewRounded / 2 + 1 : slidesPerViewRounded + 1) - Math.abs(progress);
          let translateAdd = 0;
          scale = 0;
          if (cp >= 0) {
            cp = -scaleDiff * 2 + cp * (1 + scaleDiff * 2);
            cp = Math.max(Math.min(cp, 1), 0);
            scale = (smallSlideRatio - scaleDiff) * cp;
            translateAdd = -cp * (smallSlideRatio + scaleDiff) * currentSlideSize + cp * spaceBetween * (isFloatSPV ? 2 : 1);
          }
          translate = -offset + (swiperSize * Math.min(progress, 1) + translateAdd) * rtlMultiplier;
          opacity = 0;
        }
      }

      if (scale! < 0) scale = 0;
      if (scale! > 1) scale = 1;
      if (scale! === 0) scale = 0.00001;

      slideEl.style.setProperty('--swiper-material-scale', scale!);
      slideEl.style.setProperty('--swiper-material-opacity', opacity);
      opacityEls.forEach((el: any) => { el.style.opacity = opacity; });
      scaleEls.forEach((scaleEl: any) => {
        let elementScale = parseFloat(scaleEl.getAttribute('data-swiper-material-scale'));
        if (Number.isNaN(elementScale) || (!elementScale && elementScale !== 0)) elementScale = 1;
        scaleEl.style.transform = `scale(${1 + (elementScale - 1) * (1 - scale!)})`;
      });

      if (swiper.isHorizontal()) {
        materialEl.style.width = `${100 * scale!}%`;
        materialEl.style.transform = `translate3d(${translate - cssModeTranslateOffset + (rtl ? (1 - scale!) * currentSlideSize : 0)}px, 0, 0)`;
      } else {
        materialEl.style.height = `${100 * scale!}%`;
        materialEl.style.transform = `translate3d(0, ${translate - cssModeTranslateOffset}px, 0)`;
      }
    }
  };

  const setTransition = (duration: number) => {
    const { slides } = swiper;
    const transformElements: any[] = [];
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const materialEl = slideEl.querySelector('.swiper-material-wrapper');
      const opacityEls = slideEl.querySelectorAll('.swiper-material-animate-opacity');
      const scaleEls = slideEl.querySelectorAll('[data-swiper-material-scale]');
      [materialEl, ...scaleEls, ...opacityEls].forEach((el: any) => {
        el.style.transitionDuration = `${duration}ms`;
      });
      transformElements.push(materialEl);
    }
    effectVirtualTransitionEnd({ swiper, duration, transformElements, allSlides: true });
  };

  on('beforeInit', () => {
    if (swiper.params.effect !== 'material') return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}material`);
    if (swiper.isElement && swiper.hostEl) {
      swiper.hostEl.classList.add(`swiper-${swiper.params.direction}`);
    }
    const overwriteParams = {
      loopAdditionalSlides: 1,
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode,
    };
    Object.assign(swiper.params, overwriteParams);
    Object.assign(swiper.originalParams, overwriteParams);
  });

  on('setTranslate', () => {
    if (swiper.params.effect !== 'material') return;
    setTranslate();
  });

  on('setTransition', (_s: any, duration: number) => {
    if (swiper.params.effect !== 'material') return;
    setTransition(duration);
  });

  on('slidesUpdated', () => {
    if (
      !swiper.params.centeredSlides &&
      swiper.params.slidesPerView > 1 &&
      !swiper.params.loop &&
      swiper.params.materialEffect.slideSplitRatio < 1
    ) {
      const lastItem = swiper.snapGrid[swiper.snapGrid.length - 1];
      swiper.snapGrid.push(lastItem + swiper.slidesSizesGrid[0] + swiper.params.spaceBetween);
    }
    (swiper as any).__preventObserver__ = true;
    swiper.el.style.setProperty('--swiper-material-slide-size', `${swiper.slidesSizesGrid[0]}px`);
    requestAnimationFrame(() => {
      (swiper as any).__preventObserver__ = false;
    });
  });
}
