import React from 'react'
import IServicesThumb from '@/models/services';
import Image from 'next/image';
import './ServicesThumb.scss'

interface IPropsServicesThumb {
  servicesData: IServicesThumb;
}

function ServicesThumb({servicesData}: IPropsServicesThumb) {
  
  let {thumbnail, title, text, url, aspectRatio} = servicesData;

  return (
    <div className="services-thumb">
      <div className="services-thumb__content">
        <a className="services-thumb__img" href={url}>
          <Image
            src={thumbnail}
            alt={title}
            width={aspectRatio.width}
            height={aspectRatio.height}
            priority
          />
        </a>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <a className="button-default" href={url}>Подробнее</a>
    </div>
  )
}

export default ServicesThumb;