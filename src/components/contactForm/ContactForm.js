import React from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

import sprite from '../../images/sprite.svg';
import './ContactForm.css';
import MyModalBtnCross from '../modal/modalBtnCross/ModalBtnCross';

const ContactForm = ({ onClose, openSuccessModal }) => {
  const { t } = useTranslation();

  // .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
  const sendData = e => {
    e.preventDefault();
    // console.log(`e.target.name`, e.target.name);
    // console.log(`e.target.phone`, e.target.phone);
    // console.log(`e.target.message`, e.target.message);
    emailjs
      .sendForm(
        'service_stomatcenter',
        'template_stomatcenter',
        e.target,
        `${process.env.REACT_APP_USER_ID}`,
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        },
      );
    e.target.reset();
    onClose();
    openSuccessModal();
  };

  return (
    <div className="FormModalWrapper">
      <MyModalBtnCross onHandleClose={onClose} />
      <form action="#" className="ModalForm" onSubmit={sendData}>
        <p className="FormText">{t('Залиште свої дані, ми Вам передзвонимо')}</p>
        <label className="FormFieldWrapper">
          {t("Ім'я")}
          <span className="FormInputWrapper">
            <input
              type="text"
              className="FormInput"
              name="name"
              placeholder={t("Введіть ім'я")}
              required
            />
            <svg className="Icon">
              <use href={sprite + '#icon-person-black'} width="12" height="12"></use>
            </svg>
          </span>
        </label>
        <label className="FormFieldWrapper">
          {t('Телефон')}
          <span className="FormInputWrapper">
            <input
              type="tel"
              className="FormInput"
              name="phone"
              placeholder="0XX-XXX-XX-XX"
              required
            />
            <svg className="Icon">
              <use href={sprite + '#icon-phone-black'} width="12" height="12"></use>
            </svg>
          </span>
        </label>
        <label className="FormFieldWrapper form__field-message">
          {t('Поле для коментарів')}
          <textarea
            name="message"
            className="FormMessage"
            placeholder={t('Введіть текст')}
          ></textarea>
        </label>
        <input
          type="submit"
          className="Button ModalSubmitButton"
          value={t('Замовити дзвінок')}
          onClose={onClose}
        />
      </form>
    </div>
  );
};

export default ContactForm;
