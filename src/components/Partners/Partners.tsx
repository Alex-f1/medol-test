"use client";

import React from 'react';
import TitleBlocks from '../TitleBlocks/TitleBlocks';
import PartnersData from '@/data/partners-data.json';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Grid, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Partners.scss';

interface IPartners {
  thumbnail: string,
  alt: string,
  aspectRatio: IPartnersAspectRatio;
}

interface IPartnersAspectRatio {
  width: number;
  height: number;
}

function Partners() {

  const partners: IPartners[] = PartnersData;

  return (
    <div className="partners">
      <div className="container">
        <TitleBlocks title="ПАРТНЕРЫ"/>
        <div className="partners__wrapper">
          <Swiper 
            slidesPerView={4}
            spaceBetween={30}
            speed={1000}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: '.partners .swiper-button-prev',
              nextEl: '.partners .swiper-button-next',
            }}
            modules={[Grid, Navigation, Pagination]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 17,
                grid: {
                  rows: 2,
                  fill: "row",
                }
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                grid: {
                  rows: 2,
                  fill: "row",
                }
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
                grid: {
                  rows: 2,
                  fill: "row",
                }
              },
            }}
            className="partners__slider"
          >
            {
              partners.map((item, index) => {
                let {thumbnail, alt, aspectRatio} = item;
                return (
                  <SwiperSlide className="partners__item" key={index}>
                    <div className="partners__img">
                      <Image
                        src={thumbnail}
                        alt={alt}
                        width={aspectRatio.width}
                        height={aspectRatio.height}
                        priority
                      />
                    </div>
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </div>
  )
}

export default Partners;