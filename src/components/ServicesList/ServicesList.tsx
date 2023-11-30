"use client";

import React, { useEffect, useState } from 'react';
import TitleBlocks from '../TitleBlocks/TitleBlocks';
import ServicesThumb from '../ServicesThumb/ServicesThumb';
import ServicesData from '@/data/services-data.json';
import IServicesThumb from '@/models/services';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './ServicesList.scss';

function ServicesList() {

  const services: IServicesThumb[] = ServicesData;
  
  const styleServicesListBgImg = {
    backgroundImage: "url(./services-bg.png)",
  }

  return (
    <section className="services-list">
      <TitleBlocks title="УСЛУГИ"/>
      <div className="services-list__wrapper" style={styleServicesListBgImg}>
        <div className="container">
          <div className="services-list__items">
            <Swiper 
              slidesPerView={3}
              spaceBetween={98}
              speed={1000}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 98,
                },
              }}
              className="services-list__slider"
            >
              {
                services.map((item, index) => {
                  return (
                    <SwiperSlide className="services-list__item" key={index}>
                      <ServicesThumb servicesData={item} /> 
                    </SwiperSlide>
                  );
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesList;