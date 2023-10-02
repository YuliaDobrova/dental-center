import React from 'react';
import './ButtonBurgerMenu.css';
import sprite from '../../images/sprite.svg';

const ButtonBurgerMenu = ({ openBurgerModal }) => {
  return (
    <div className="BurgerBtn" onClick={openBurgerModal}>
      <svg className="BurgerBtnIcon">
        <use href={sprite + '#menu-burger'}></use>
      </svg>
    </div>
  );
};

export default ButtonBurgerMenu;
