"use-client";

import React from 'react';
import TitleBlocks from '../TitleBlocks/TitleBlocks';
import Image from 'next/image';
import './AboutCompany.scss'

function AboutCompany() {
  return (
    <section className="about-company">
      <div className="container">
        <TitleBlocks title="О КОМПАНИИ"/>
        <div className="about-company__inner">
          <div className="about-company__img">
            <Image
              src="./about-company-pic.svg"
              alt="О КОМПАНИИ"
              width="574"
              height="574"
              priority
            />
          </div>
          <div className="about-company__content">
            <p>
              Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан. 
            </p>
            <a className="button-default" href="#">Узнать больше</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany