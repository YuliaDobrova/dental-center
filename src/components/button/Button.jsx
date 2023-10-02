import React from 'react';
import { useTranslation } from 'react-i18next';

import './Button.css';

const Button = ({ openModal }) => {
  const { t } = useTranslation();
  return (
    <button type="button" className="Button UpperBtn" onClick={openModal}>
      {t('Замовити дзвінок')}
    </button>
  );
};

export default Button;
