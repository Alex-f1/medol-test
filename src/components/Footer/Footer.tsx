"use client";

import React, { useState } from 'react';
import Contacts from '../Contacts/Contacts';
import ContactsData from '@/data/contacts-data.json';
import Logo from '../Logo/Logo';
import './Footer.scss';
import Modal from '../Modal/Modal';

function Footer() {
  
  const contacts = ContactsData[0];

  const [modalActive, setModalActive] = useState<boolean>(false);

  function modalOpen(modalActive: boolean) {
    setModalActive(modalActive);
  }

  return (
    <div className="site-info">
      <div className="container">
        <div className="site-info__cols">
          <div className="site-info__col">
            <div className="site-info__contacts">
              <div className="site-info__title">Контакты</div>
              <Contacts
                addressIcon={contacts.mainAddress.icon}
                address={contacts.mainAddress.address}
                phoneIcon={contacts.mainPhone.icon}
                phone={contacts.mainPhone.phone}
                phone_2={contacts.mainPhone.phone_2}
              >
                <div className="contacts__item">
                  <i className="contacts__icon">
                    <img src={contacts.mainEmail.icon} width="22" height="22" alt="Email icon" />
                  </i>
                  <div className="contacts__content">
                    <a href={`mailto:${contacts.mainEmail.email}`}>
                      {contacts.mainEmail.email}
                    </a>
                  </div>
                </div>
                <button 
                  className="button-default" 
                  onClick={() => {modalOpen(true);}} 
                  type="button">
                    Оставить заявку
                </button>
              </Contacts>
            </div>
            <div className="site-info__text">
              <Logo/>
              <p>
                Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.
              </p>
            </div>
          </div>
          <div className="site-info__col">
            <div className="site-info__menu">
              <nav className="site-info__nav">
                <div className="site-info__title">О компании</div>
                <ul>
                  <li><a href="#">История</a></li>
                  <li><a href="#">Партнеры</a></li>
                  <li><a href="#">Вакансии</a></li>
                </ul>
              </nav>
              <nav className="site-info__nav">
                <div className="site-info__title">Продукция</div>
                <ul>
                  <li><a href="#">Эндоваскулярная хирургия</a></li>
                  <li><a href="#">Аритмология</a></li>
                  <li><a href="#">Кардиохирургия</a></li>
                  <li><a href="#">Лабораторная диагностика</a></li>
                  <li><a href="#">Хирургия</a></li>
                  <li><a href="#">Эндоурология</a></li>
                  <li><a href="#">Нейрохирургия</a></li>
                  <li><a href="#">Анестезиология и реанимация</a></li>
                  <li><a href="#">Диабет</a></li>
                </ul>
              </nav>
              <nav className="site-info__nav">
                <div className="site-info__title">Услуги</div>
                <ul>
                  <li><a href="#">Сервис</a></li>
                  <li><a href="#">Регистрации</a></li>
                  <li><a href="#">Услуги логистики</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="site-info__bottom">
          <div className="site-info__copy">
            &copy; 2021 ООО «Medical Online Services»
          </div>
          <div className="site-info__make">
            Сайт разработан компанией www<a href="#" target="blank">.uz</a>
          </div>
        </div>
      </div>
      <Modal 
        title="Оставьте заявку"
        isActive={modalActive} 
        setIsActive={setModalActive}
      />
    </div>
  )
}

export default Footer;