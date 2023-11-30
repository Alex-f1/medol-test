"use client";

import React, { useEffect, useState } from 'react';
import ProductThumb from '../ProductThumb/ProductThumb';
import TitleBlocks from '../TitleBlocks/TitleBlocks';
import GoToLink from '../GoToLink/GoToLink';
import ProductsData from '@/data/products-data.json';
import IProductThumb from '@/models/products';
import './ProductList.scss';

function ProductList() {

  const products: IProductThumb[] = ProductsData;
  
  return (
    <section className="product-list">
      <div className="container">
        <TitleBlocks title="ПРОДУКЦИЯ"/>
        <div className="product-list__items">
          {
            products.map((item) => {
              return (
                <div className="product-list__item" key={item.id}>
                  <ProductThumb productData={item} /> 
                </div>
              );
            })
          }
        </div>
        <GoToLink 
          name="Перейти в каталог нашей продукции"
          url="#"
        />
      </div>
    </section>
  )
}

export default ProductList;