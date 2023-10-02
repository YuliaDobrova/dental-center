import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import photoKrolik from '../../images/krolyk-photo-hd-png-min2-Transparent.png';
import dentalInstruments from '../../images/dental-instruments-min.png';
import chairDentistry from '../../images/chair-dentistry-edited-min.png';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="HeroWrapper">
      <img src={dentalInstruments} className="HeroDentalInstruments" alt="dentalInstruments" />
      <img src={chairDentistry} className="HeroChairDentistry" alt="chairDentistry" />
      <img src={photoKrolik} className="HeroPhotoDoctorKrolik" alt="Dr.Krolik" />
      <div className="HeroTitleWrapper">
        <p className="HeroTitleText">
          <Link className="HeroTitle_One" to="/about" exact="true">
            {t('Стоматологічний центр')} <br />
            <b className="HeroTitle_Two">{t('доктора Олександра Кролика')}</b>
          </Link>
        </p>
        <p className="HeroText">
          {t('надає широкий спектр послуг та встиг завоювати бездоганну репутацію у тисяч людей.')}
        </p>
        <p className="HeroText">
          <Link className="HeroText" to="/price" exact="true">
            {t(
              'Приходьте на консультацію та дізнайтесь про вирішення вашої проблеми за найлояльнішою ціною.',
            )}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Hero;
