import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import sprite from '../../images/sprite.svg';
import allServiceData from './allServiceData/allServiceData.json';
import './allServicesInfo.css';

const ProstheticsInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="AllServicesWrapper">
      <div className="AllServicesWrapper-Icon-Name ProstheticsWrapper">
        <svg className="AllServicesIcon ProstheticsIcon">
          <use href={sprite + allServiceData[5].icon} width="80"></use>
        </svg>
        <p className="AllServicesName">{t(allServiceData[5].title)}</p>
      </div>
      <div className="AllServicesWrapper-Text">
        <Link className="ServiceLink" to="/services" exact="true">
          <p className="AllServices-Nav">{t('Всі послуги')}</p>
        </Link>
        <h2 className="AllServices-Title">{t(allServiceData[5].title)}</h2>
        <p className="AllServices-Text"> {t(allServiceData[5].text)}</p>
      </div>
    </div>
  );
};

export default ProstheticsInfo;
