import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import headerRoutes from '../../../routes/headerRoutes';
import './NavigationList.css';

const NavigationList = ({ onClose }) => {
  const { t } = useTranslation();
  return (
    <ul className="NavLinkList" onClick={onClose}>
      {headerRoutes.map(route => (
        <li className="NavLinkListItem" key={route.path}>
          <NavLink
            className="NavLink"
            activeClassName="NavLink--active"
            to={route.path}
            exact={route.exact}
          >
            {t(route.name)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavigationList;
