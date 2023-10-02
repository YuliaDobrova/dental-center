import React from 'react';
import Container from '../container/Container';
import Logo from '../logo/Logo';
import Button from '../button';
import Contacts from '../contacts';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import Navigation from '../navigation/Navigation';
import './Header.css';
import useWindowDimensions from '../hooks/widthHook';
// import Menu from '../menu/Menu';
import TabletContacts from '../tabletContacts/TabletContacts';
import ButtonBurgerMenu from '../buttonBurgerMenu/ButtonBurgerMenu';

const Header = ({ openModal, openBurgerModal }) => {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <header className="Header">
        <Logo />
        <Button openModal={openModal} />
        {width > 767 && width < 1250 && <TabletContacts />}
        {width > 1250 && <Contacts />}
        {width > 1250 && (
          <div className="NavHeaderWreaper">
            <Navigation />
          </div>
        )}
        {width < 1250 && <ButtonBurgerMenu openBurgerModal={openBurgerModal} />}
        <LanguageSwitcher />
      </header>
    </Container>
  );
};

export default Header;
