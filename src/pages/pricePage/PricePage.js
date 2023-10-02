import React from 'react';
import { useTranslation } from 'react-i18next';
import './PricePage.css';

const PricePage = () => {
  const { t } = useTranslation();
  return (
    <div className="PriceWrapper">
      <p className="Price">
        {t(
          "Кожен випадок по-своєму унікальний і вартість майбутніх процедур з'ясовується лише після огляду стоматологом.",
        )}
      </p>
    </div>
  );
};

export default PricePage;
