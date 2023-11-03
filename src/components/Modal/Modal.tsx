"use client";

import React from 'react';
import './Modal.scss'

interface IModal {
  title: string
  isActive: boolean;
  setIsActive: (modalOpen: boolean) => void;
  children?: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
}

function Modal({title, isActive, setIsActive, children}: IModal) {
  return (
    <div className={isActive ? "modal _is-active" : "modal"} onClick={() => setIsActive(false)}>
      <div className="modal__container" onClick={(event) => event.stopPropagation()}>
        <button className="modal__button-close" onClick={() => setIsActive(false)} type="button"></button>
        <div className="modal__content">
          <h1>{title}</h1>
          <form>
            <div className="input-field">
              <input type="text"/>
              <span className="input-field__placeholder">
                ФИО
                <i></i>
              </span>
            </div>
            <div className="input-field">
              <input type="tel" required/>
              <span className="input-field__placeholder">
                Номер телефона
                <i>*</i>
              </span>
            </div>
            <div className="input-field">
              <input type="text" required/>
              <span className="input-field__placeholder">
                Тема обращения
                <i>*</i>
              </span>
            </div>
            <div className="input-field input-field">
              <textarea required></textarea>
              <span className="input-field__placeholder">
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