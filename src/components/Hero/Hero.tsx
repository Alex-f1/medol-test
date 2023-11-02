"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import HeroData from '@/data/hero-data.json';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './Hero.scss';

type HeroType = {
  title: string,
  text: string,
  img: string,
  aspectRatio: IHeroAspectRatio
}

interface IHeroAspectRatio {
  width: number;
  height: number;
}

function Hero() {

  const heroList: HeroType[] = HeroData;
  
  const styleHeroBgImg = {
    backgroundImage: "url(./hero-bg.png)",
  }

  return (
    <section className="hero" style={styleHeroBgImg}>
      <div className="container">
        <div className="hero__inner">
          <Swiper 
            slidesPerView={1}
            spaceBetween={30}
            effect={'fade'}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Autoplay, Pagination]}
            className="hero__slider"
          >
            {
              heroList.map((item, index) => {
                return (
                  <SwiperSlide className="hero__item" key={index}>
                    <div className="hero__content">
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                      <a className="button-default" href="#">Подробнее</a>
                    </div>
                    <div className="hero__img">
                      <Image
                        src={item.img }
                        alt={item.img}
                        width={item.aspectRatio.width}
                        height={item.aspectRatio.height}
                        priority
                      />
                    </div>
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Hero;