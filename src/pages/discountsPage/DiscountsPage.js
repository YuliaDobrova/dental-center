import React from 'react';
import { useTranslation } from 'react-i18next';

import useWindowDimensions from '../../components/hooks/widthHook';
import PacientPhotoList from '../../components/pacientPhotoList/PacientPhotoList.jsx';
import './DiscountsPage.css';

const DiscountsPage = () => {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  return (
    <>
      {width > 767 && (
        <div className="PacientPhotoListWrapper">
          <PacientPhotoList />
        </div>
      )}
      <p className="DiscountsPageText">
        {t(
          'Поспішаємо повідомити вам хорошу новину! Для пацієнтів, які вперше звернулися до стоматологічного центру: ✨БЕЗКОШТОВНА КОНСУЛЬТАЦІЯ✨ Це чудова нагода не відкладати свій візит до стоматолога',
        )}
      </p>
    </>
  );
};

export default DiscountsPage;
