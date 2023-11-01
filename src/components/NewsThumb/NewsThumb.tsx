import React from 'react'
import INewsThumb from '@/models/news';
import Image from 'next/image';
import './NewsThumb.scss'

interface IPropsNewsThumb {
  newsData: INewsThumb;
}

function NewsThumb({newsData}: IPropsNewsThumb) {
  
  let {thumbnail, title, date, text, url, aspectRatio} = newsData;

  return (
    <div className="news-thumb">
      <div className="news-thumb__content">
        <a className="news-thumb__img" href={url}>
          <Image
            src={thumbnail}
            alt={title}
            width={aspectRatio.width}
            height={aspectRatio.height}
            priority
          />
        </a>
        <h4><a href={url}>{title}</a></h4>
        <span>{date}</span>
        <p>{text}</p>
      </div>
      <a className="button-default" href={url}>Подробнее</a>
    </div>
  )
}

export default NewsThumb;