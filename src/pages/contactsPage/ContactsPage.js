import { useTranslation } from 'react-i18next';
// import MapComponent from '../../components/mapComponent/MapComponent';
import outsidePhoto from './outside-min.png';
// import useWindowDimensions from '../../components/hooks/widthHook';
import map from "../../images/map.jpg"

import './ContactsPage.css';
// import MapComponentMobile from '../../components/mapComponent/MapComponentMobile';

const ContactsPage = () => {
  const { t } = useTranslation();
  // const { width } = useWindowDimensions();
  return (
    <>
      <div className="ContactsPageWrapper">
        <div>
          <div  className="ContactsInfoWrapper">
            <p className="ContactsInfo">
              {t('Наша адреса:')}
              <br />
              <b> {t('м. Лівобережна, вулиця Ентузіастів, 39')}</b>
              <br />
              {t('Проїзд від метро Лівобережна на автобусі №48.')}
            </p>

            <p className="ContactsInfo">
              {t('Час роботи:')} <br /> {t('ПН-ПТ 08:00–20:00')} <br /> {t('СБ 09:00-17:00')}
            </p>
            <p className="ContactsInfo">{t('Записуйтесь на прийом за телефонами:')} </p>
            <p>
              <a className="Contacts" href="tel:+0671540333">
                (067) 154 0333
              </a>
            </p>
            <p>
              <a className="Contacts" href="tel:+0991540333">
                (099) 154 0333
              </a>
            </p>
            <p>
              <a className="Contacts" href="tel:+0731540333">
                (073) 154 0333
              </a>
            </p>
            <p>
              <a className="Contacts" href="mailto:2940530@gmail.com">
                2940530@gmail.com
              </a>
            </p>
            {/* <p className="Contacts"> (067)154-0333 </p>
            <p className="Contacts">(099)154-0333</p>
            <p className="Contacts"> (073)154-0333 </p>

            <p className="ContactsInfo Contacts">E-mail: 2940530@gmail.com</p> */}
          </div>
          <img src={outsidePhoto} className="outsidePhoto Photo" alt="outsidePhoto" width="400" />
        </div>
        <div className="ContactsMapWrapper">
                    <img src={map} className="Map" alt="Map" />
          {/* {width > 767 && <MapComponent />} */}
          {/* {width < 767 && <MapComponentMobile />} */}
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
