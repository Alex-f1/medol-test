"use client";

import React, { useState } from 'react';
import './Modal.scss'

interface IModal {
  title: string
  isActive: boolean;
  setIsActive: (modalOpen: boolean) => void;
  children?: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
}

function Modal({title, isActive, setIsActive, children}: IModal) {

  const [fullNameValue, setFullNameValue] = useState<string>();
  const [phoneValue, setPhoneValue] = useState<string>();
  const [themeTextValue, setThemeTextValue] = useState<string>();
  const [textareaValue, setTextareaValue] = useState<string>();

  function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    let { name, value } = event.target;
    if (name == "full_name") {
      setFullNameValue(value);
    }
    if (name == "phone") {
      setPhoneValue(value);
    }
    if (name == "theme_text") {
      setThemeTextValue(value);
    }
  }

  function onChangeTextarea(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextareaValue(event.target.value);
  }

  return (
    <div className={isActive ? "modal _is-active" : "modal"} onClick={() => setIsActive(false)}>
      <div className="modal__container" onClick={(event) => event.stopPropagation()}>
        <button className="modal__button-close" onClick={() => setIsActive(false)} type="button"></button>
        <div className="modal__content">
          <h1>{title}</h1>
          <form>
            <div className="input-field">
              <input type="text" name="full_name" onChange={onChangeInput} />
              <span className={fullNameValue ? "_is-hidden input-field__placeholder": "input-field__placeholder"}>
                ФИО
                <i></i>
              </span>
            </div>
            <div className="input-field">
              <input type="tel" name="phone" onChange={onChangeInput} required/>
              <span className={phoneValue ? "_is-hidden input-field__placeholder": "input-field__placeholder"}>
                Номер телефона
                <i>*</i>
              </span>
            </div>
            <div className="input-field">
              <input type="text" name="theme_text" onChange={onChangeInput} required/>
              <span className={themeTextValue ? "_is-hidden input-field__placeholder": "input-field__placeholder"}>
                Тема обращения
                <i>*</i>
              </span>
            </div>
            <div className="input-field input-field">
              <textarea onChange={onChangeTextarea} required></textarea>
              <span className={textareaValue ? "_is-hidden input-field__placeholder": "input-field__placeholder"}>
                Сообщение
                <i>*</i>
              </span>
            </div>
            <label className="checkbox-field">
              <input type="checkbox"/>
              <span>
                Отправляя заявку Вы соглашаетесь с политикой  конфиденциальности
              </span>
            </label>
            <button className="button-default" type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal;