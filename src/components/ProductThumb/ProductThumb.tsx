import React from 'react'
import IProductThumb from '@/models/products';
import Image from 'next/image';
import './ProductThumb.scss'

interface IPropsProductThumb {
  productData: IProductThumb;
}

function ProductThumb({productData}: IPropsProductThumb) {
  
  let {thumbnail, title, url, aspectRatio} = productData;

  return (
    <div className="product-thumb">
      <div className="product-thumb__img">
        <Image
          src={thumbnail}
          alt={title}
          width={aspectRatio.width}
          height={aspectRatio.height}
          priority
        />
      </div>
      <h4>{title}</h4>
      <a className="button-default" href={url}>Посмотреть все</a>
    </div>
  )
}

export default ProductThumb;