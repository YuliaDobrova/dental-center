import React from 'react';
import MyModalBtnCross from '../modal/modalBtnCross/ModalBtnCross';

import NavigationList from '../navigation/navigationList/NavigationList';
import './BurgerMenu.css';

const BurgerMenu = ({ closeBurgerMenu }) => {
  return (
    <>
      <MyModalBtnCross onHandleClose={closeBurgerMenu} />
      <NavigationList onClose={closeBurgerMenu} />
      <div className="BurgerContactsWrapper">
        <a className="BurgerContacts" href="tel:+0671540333">
          (067) 154 0333
        </a>
        <a className="BurgerContacts" href="tel:+0991540333">
          (099) 154 0333
        </a>
        <a className="BurgerContacts" href="tel:+0731540333">
          (073) 154 0333
        </a>
        <a className="BurgerContacts" href="mailto:2940530@gmail.com">
          2940530@gmail.com
        </a>
      </div>
    </>
  );
};

export default BurgerMenu;
