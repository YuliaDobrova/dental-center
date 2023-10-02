import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import serviceData from '../allServicesComponents/allServiceData/allServiceData.json';
import sprite from '../../images/sprite.svg';
import './ServiceList.css';

const ServiceList = () => {
  const { t } = useTranslation();
  return (
    <div className="ServiceWrapper">
      <ul className="ServiceList">
        {serviceData.map(data => (
          <li className="ServiceListItem" key={data.title}>
            <Link className="ServiceLink" to={data.path} exact={data.exact}>
              <svg className="ServiceIcon">
                <use href={sprite + data.icon} width="80"></use>
              </svg>
              <p className="ServiceName">{t(data.title)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
