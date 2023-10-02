import React from 'react';
import { useTranslation } from 'react-i18next';

import sprite from '../../images/sprite.svg';
import MyModalBtnCross from '../modal/modalBtnCross/ModalBtnCross';
import './SuccessMessageModal.css';

const SuccessMessageModal = ({ onClose }) => {
  const { t } = useTranslation();
  return (
    <>
      <MyModalBtnCross onHandleClose={onClose} />
      <div className="SuccessModalWrapper">
        <p className="SuccessModalTitle">{t('Ваш запит успішно надіслано!')}</p>
        <p className="SuccessModalTitle last">{t('Очікуйте на дзвінок адміністратора.')}</p>
        <div className="SuccessModalIconWrapper">
          <svg className="SuccessModalIcon">
            <use href={sprite + '#icon-smartphone-1'} width="35" height="35"></use>
          </svg>
        </div>
        <button className="SuccessModalButton" type="button" onClick={onClose}>
          OK
        </button>
      </div>
    </>
  );
};

export default SuccessMessageModal;
