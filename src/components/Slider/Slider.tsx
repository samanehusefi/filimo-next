"use client";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./Slider.module.css";
import { sliderData } from "@/data/slider.data";

const Slider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={`${styles.slider} relative`}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={700}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.slide}>
              <picture>
                <source media="(max-width:768px)" srcSet={item.mobilesrc} />

                <img
                  src={item.DesctopSrc}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-black/40 to-black/90" />

              <div className={styles.content}>
                <h1>{item.title}</h1>

                <p>{item.description}</p>

                {item.buttonText && <button>{item.buttonText}</button>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div className="absolute bottom-40 left-8 z-50 flex items-center gap-3">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="flex h-12 w-12 items-center justify-center rounded-full border
           border-white/60 bg-transparent text-white transition hover:bg-[#d37a49]/20"
        >
          <IoChevronForward className="text-xl" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="flex h-12 w-12 items-center justify-center rounded-full border
           border-white/60 bg-transparent text-white transition hover:bg-[#d37a49]/20"
        >
          <IoChevronBack className="text-xl" />
        </button>
      </div>
    </section>
  );
};

export default Slider;
