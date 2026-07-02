/* Carousel effect module for Swiper — adapted from uiinitiative.com/catalog/carousel-slider */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function EffectCarousel({
  swiper,
  on,
  extendParams,
}: {
  swiper: any;
  on: (event: string, cb: (...args: any[]) => void) => void;
  extendParams: (params: Record<string, unknown>) => void;
}) {
  extendParams({
    carouselEffect: {
      opacityStep: 0.33,
      scaleStep: 0.2,
      sideSlides: 2,
      backGap: 0,
    },
  });

  on("beforeInit", () => {
    if (swiper.params.effect !== "carousel") return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}carousel`);
    const overwriteParams = {
      watchSlidesProgress: true,
      centeredSlides: true,
    };

    Object.assign(swiper.params, overwriteParams);
    Object.assign(swiper.originalParams, overwriteParams);
  });
  on("progress", () => {
    if (swiper.params.effect !== "carousel") return;
    const { scaleStep, opacityStep, backGap = 0 } = swiper.params.carouselEffect;
    const sideSlides = Math.max(
      Math.min(swiper.params.carouselEffect.sideSlides, 3),
      1,
    );
    const modifyMultiplier = ({
      1: 2,
      2: 1,
      3: 0.2,
    } as Record<number, number>)[sideSlides] as number;
    const translateModifier = ({
      1: 50,
      2: 50,
      3: 67,
    } as Record<number, number>)[sideSlides] as number;

    const zIndexMax = swiper.slides.length;

    for (let i = 0; i < swiper.slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const slideProgress = swiper.slides[i].progress;
      const absProgress = Math.abs(slideProgress);
      let modify = 1;

      if (absProgress > 1) {
        modify = (absProgress - 1) * 0.3 * modifyMultiplier + 1;
      }
      const opacityEls = slideEl.querySelectorAll(
        ".swiper-carousel-animate-opacity",
      );
      const direction = slideProgress > 0 ? 1 : slideProgress < 0 ? -1 : 0;
      const extraGap = absProgress > 1 ? backGap * direction : 0;
      const translate = `${
        slideProgress *
        modify *
        translateModifier *
        (swiper.rtlTranslate ? -1 : 1)
      }%`;

      const scale = 1 - absProgress * scaleStep;
      const zIndex = zIndexMax - Math.abs(Math.round(slideProgress));
      slideEl.style.transform = `translateX(calc(${translate} + ${extraGap}px)) scale(${scale})`;
      slideEl.style.zIndex = zIndex;
      if (absProgress > sideSlides + 1) {
        slideEl.style.opacity = 0;
      } else {
        slideEl.style.opacity = 1;
      }

      opacityEls.forEach((opacityEl: any) => {
        opacityEl.style.opacity = 1 - absProgress * opacityStep;
      });
    }
  });
  on("resize", () => {
    if (
      swiper.virtual &&
      swiper.params.virtual &&
      swiper.params.virtual.enabled
    ) {
      requestAnimationFrame(() => {
        if (swiper.destroyed) return;
        swiper.updateSlides();
        swiper.updateProgress();
      });
    }
  });

  on("setTransition", (s, duration) => {
    if (swiper.params.effect !== "carousel") return;
    for (let i = 0; i < swiper.slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const opacityEls = slideEl.querySelectorAll(
        ".swiper-carousel-animate-opacity",
      );
      slideEl.style.transitionDuration = `${duration}ms`;
      opacityEls.forEach((opacityEl: any) => {
        opacityEl.style.transitionDuration = `${duration}ms`;
      });
    }
  });
}
