import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import sprite from '../../images/sprite.svg';
import allServiceData from './allServiceData/allServiceData.json';
import './allServicesInfo.css';

const HygieneInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="AllServicesWrapper">
      <div className="AllServicesWrapper-Icon-Name HygieneWrapper">
        <svg className="AllServicesIcon HygieneIcon">
          <use href={sprite + allServiceData[6].icon} width="80"></use>
        </svg>
        <p className="AllServicesName">{t(allServiceData[6].title)}</p>
      </div>
      <div className="AllServicesWrapper-Text">
        <Link className="ServiceLink" to="/services" exact="true">
          <p className="AllServices-Nav">{t('Всі послуги')}</p>
        </Link>
        <h2 className="AllServices-Title">{t(allServiceData[6].title)}</h2>
        <p className="AllServices-Text">{t(allServiceData[6].text)} </p>
      </div>
    </div>
  );
};

export default HygieneInfo;
