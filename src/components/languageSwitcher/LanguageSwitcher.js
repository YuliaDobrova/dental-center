import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18next';
import './LanguageSwitcher.css';
import sprite from '../../images/sprite.svg';

const languages = ['ua', 'ru', 'en'];
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const languageIndex = languages.findIndex(lang => i18n.language === lang);
  const nextLangIndex = languageIndex === 2 ? 0 : languageIndex + 1;
  return (
    <div className="languageSwitcherWrapper">
      <button className="langBtn" onClick={() => i18n.changeLanguage(languages[nextLangIndex])}>
        <svg className="languageIcon">
          <use href={sprite + '#icon-language'}></use>
        </svg>
        {i18n.language?.toUpperCase()}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
