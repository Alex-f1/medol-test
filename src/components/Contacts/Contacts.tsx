import React from 'react';
import './Contacts.scss';
import ContactsData from '@/data/contacts-data.json';
import Image from 'next/image';

type ContactsData = {
  addressIcon: string,
  address: string,
  phoneIcon: string,
  phone: string,
  phone_2: string
}

function Contacts(props: ContactsData) {
  return (
    <div className="contacts">
      <div className="contacts__item">
        <i className="contacts__icon">
          <Image
            src={props.addressIcon}
            alt="Address icon"
            width={25}
            height={25}
            priority
          />
        </i>
        <div className="contacts__content">
          {props.address}
        </div>
      </div>
      <div className="contacts__item">
        <i className="contacts__icon">
          <Image
            src={props.phoneIcon}
            alt="Address icon"
            width={22}
            height={22}
            priority
          />
        </i>
        <div className="contacts__content">
          <a href={`tel:${props.phone.replace(/\s|\-|\(|\)/g, "")}`}>{props.phone}</a>
          <a href={`tel:${props.phone_2.replace(/\s|\-|\(|\)/g, "")}`}>{props.phone_2}</a>
        </div>
      </div>
    </div>
  )
}

export default Contacts;