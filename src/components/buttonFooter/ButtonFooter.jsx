import React from 'react';
import { useTranslation } from 'react-i18next';

import './ButtonFooter.css';

const ButtonFooter = ({ toggleModal }) => {
  const { t } = useTranslation();
  return (
    <button type="button" className="ButtonFooter" onClick={toggleModal}>
      {t('Запишіться на консультацію')}
    </button>
  );
};

export default ButtonFooter;
