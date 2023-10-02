import React from 'react';
import { useTranslation } from 'react-i18next';
import sprite from '../../images/sprite.svg';
import './SocialList.css';

const SocialList = () => {
  const { t } = useTranslation();
  return (
    <div className="SocialListWrapper">
      <p className="SocialListText">{t('Підписуйтесь на нас:')}</p>
      <a
        className="SocialListLink"
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/DoctorKrolyk/"
      >
        <svg className="SocialListIcon">
          <use href={sprite + '#icon-facebook'} width="25"></use>
        </svg>
      </a>
      <a
        className="SocialListLink"
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/dr.krolik380671300301/"
      >
        <svg className="SocialListIcon">
          <use href={sprite + '#icon-instagram'} width="25"></use>
        </svg>
      </a>
    </div>
  );
};

export default SocialList;
