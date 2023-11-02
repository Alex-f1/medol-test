"use client";

import React, { useEffect, useState } from 'react';
import TitleBlocks from '../TitleBlocks/TitleBlocks';
import NewsThumb from '../NewsThumb/NewsThumb';
import GoToLink from '../GoToLink/GoToLink';
import NewsData from '@/data/news-data.json';
import INewsThumb from '@/models/news';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './NewsList.scss';

function NewsList() {
  const [newsData, setNewsData] = useState<INewsThumb[]>([]);

  function getNewsData() {
    const news: INewsThumb[] = NewsData;
    setNewsData(news);
  }

  useEffect(() => {
    
    getNewsData();
     
  }, []);
  

  return (
    <section className="news-list">
      <div className="container">
        <TitleBlocks title="НОВОСТИ"/>
        <div className="news-list__items">
          <Swiper 
            slidesPerView={3}
            spaceBetween={82}
            speed={1000}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 28,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 82,
              },
            }}
            className="news-list__slider"
          >
            {
              newsData.map((item, index) => {
                return (
                  <SwiperSlide className="news-list__item" key={index}>
                    <NewsThumb newsData={item} /> 
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
        </div>
        <div className="news-list__links">
          <GoToLink 
            name="Посмотреть все новости"
            url="#"
          />
          <GoToLink 
            name="Подписаться на новости"
            url="#"
          />
        </div>
      </div>
    </section>
  )
}

export default NewsList;