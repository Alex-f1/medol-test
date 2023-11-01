"use client";

import React, { ReactElement, useEffect, useState } from 'react';
import ProductThumb from '../ProductThumb/ProductThumb';
import TitleBlocks from '../TitleBlocks/TitleBlocks';
import ProductsData from '@/data/products-data.json';
import IProductThumb from '@/models/products';
import './ProductList.scss'
import GoToLink from '../GoToLink/GoToLink';

function ProductList() {

  const [productsData, setProductsData] = useState<IProductThumb[]>([]);

  function getProductsData() {
    const products: IProductThumb[] = ProductsData;
    setProductsData(products);
  }

  useEffect(() => {
    
    getProductsData();
    
  }, []);
  
  return (
    <section className="product-list">
      <div className="container">
        <TitleBlocks title="ПРОДУКЦИЯ"/>
        <div className="product-list__items">
          {
            productsData.map((item) => {
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