import React from 'react';
import { useTranslation } from 'react-i18next';

import NavigationList from '../navigation/navigationList/NavigationList';
import Container from '../container/Container';
import ButtonFooter from '../buttonFooter';
import Contacts from '../contacts';
import QrCode from '../qrCode/QrCode';
import useWindowDimensions from '../hooks/widthHook';
import FooterContacts from '../footerContacts/FooterContacts';
import './Footer.css';
import SocialList from '../socialList/SocialList';

const Footer = ({ toggleModal }) => {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  return (
    <footer className="Footer">
      <Container>
        <div className="FooterWrapper">
          <div className="FooterNavigationWrapper">
            <NavigationList />
          </div>
          {width < 1250 && <FooterContacts />}
          <SocialList />
          <ButtonFooter toggleModal={toggleModal} />
          {width > 1250 && (
            <div className="FooterContactsWrapper">
              <Contacts />
            </div>
          )}
          <QrCode />
          <p className="FooterRights">© 2021-2023 {t('Усі права захищені.')}</p>
          <p className="FooterRights">
            <b>"Dr.Krolyk" Dental Center</b>
          </p>
          <p className="DeveloperText">
            Designed and developed by{' '}
            <a
              href="https://www.linkedin.com/in/yuliia-dobrova-37a335217/"
              target="_blank"
              rel="noreferrer"
              className="Developer"
            >
              Yuliia Dobrova
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
