import React from 'react';
import Contacts from '@/components/Contacts/Contacts';
import Logo from '@/components/Logo/Logo';
import MainMenu from '@/components/MainMenu/MainMenu';
import Image from 'next/image';
import ContactsData from '@/data/contacts-data.json';
import SwitchLanguageData from '@/data/switch-language-data.json';
import { ISwitchLanguage } from '@/models/language';
import './TopPanel.scss';


function TopPanel() {
  
  const contacts = ContactsData[0];

  const language: ISwitchLanguage = SwitchLanguageData[0];
  const languageCurrentIcon = language.switchLanguage.currentIcon;
  const languageCurrentName = language.switchLanguage.currentName;
  const languageAnother = language.switchLanguage.switchLanguageAnother;

  return (
    <div className="top-panel">
      <div className="container">
        <div className="top-panel__inner">
          <Contacts
            addressIcon={contacts.mainAddress.icon}
            address={contacts.mainAddress.address}
            phoneIcon={contacts.mainPhone.icon}
            phone={contacts.mainPhone.phone}
            phone_2={contacts.mainPhone.phone_2}
          />
          <Logo/>
          <div className="search">
            <form className="search__form">
              <button className="search__button" type="submit"></button>
              <div className="search__input">
                <input type="text" placeholder="Поиск по сайту"/>
              </div>
            </form>
          </div>
          <a className="single-social" href="#">
            <i className="single-social__icon">
              <Image
                src="/facebook-icon.svg"
                alt="Facebook icon"
                width={22}
                height={22}
                priority
              />
            </i>
            <span className="single-social__name">Мы на Facebook</span>
          </a>
          <div className="switch-language">
            <div className="switch-language__current">
              <i className="switch-language__icon">
                <Image
                  src={languageCurrentIcon}
                  alt={languageCurrentName}
                  width={22}
                  height={22}
                  priority
                />
              </i>
              <span className="switch-language__name">{languageCurrentName}</span>
            </div>
            <div className="switch-language__dropdown">
              {
                languageAnother.map((item) => {
                  return (
                    <a className="switch-language__another" href="#">
                      <i className="switch-language__icon" key={item.icon}>
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={22}
                          height={22}
                          priority
                        />
                      </i>
                      <span className="switch-language__name">{item.name}</span>
                    </a>
                  );
                })
              }
            </div>
          </div>
          <div className="button-burger"></div>
          <MainMenu/>
        </div>
      </div>
    </div>
  )
}

export default TopPanel;