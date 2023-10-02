import React from 'react';
import sprite from '../../../images/sprite.svg';
import './ModalBtnCross.css';

const MyModalBtnCross = ({ onHandleClose }) => {
  return (
    <button className="ModalButtonCross" type="button" onClick={onHandleClose}>
      <svg className="IconCross">
        <use href={sprite + '#icon-close-black-cross'} width="16" height="16"></use>
      </svg>
    </button>
  );
};

export default MyModalBtnCross;
