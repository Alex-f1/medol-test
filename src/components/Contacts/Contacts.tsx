import React from 'react';
import './Contacts.scss';

type ContactsDataType = {
  addressIcon: string,
  address: string,
  phoneIcon: string,
  phone: string,
  phone_2: string,
  children?: React.ReactNode | React.ReactNode[],
}

function Contacts({
  addressIcon,
  address,
  phoneIcon,
  phone,
  phone_2, 
  children }: ContactsDataType) {
    
  return (
    <div className="contacts">
      <div className="contacts__item">
        <i className="contacts__icon">
          <img src={addressIcon} width="22" height="22" alt="Address icon" />
        </i>
        <div className="contacts__content">
          {address}
        </div>
      </div>
      <div className="contacts__item">
        <i className="contacts__icon">
          <img src={phoneIcon} width="22" height="22" alt="Phone icon" />
        </i>
        <div className="contacts__content">
          <a href={`tel:${phone.replace(/\s|\-|\(|\)/g, "")}`}>
            {phone}
          </a>
          <a href={`tel:${phone_2.replace(/\s|\-|\(|\)/g, "")}`}>
            {phone_2}
          </a>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Contacts;