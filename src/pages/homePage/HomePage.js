import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Hero from '../../components/hero';
import ServiceList from '../../components/serviceList/ServiceList';
import PacientPhotoList from '../../components/pacientPhotoList';
import CommentSlider from '../../components/CommentSlider/CommentSlider';
import useWindowDimensions from '../../components/hooks/widthHook';
import map from "../../images/map.jpg"
// import MapComponent from '../../components/mapComponent/MapComponent';
// import MapComponentMobile from '../../components/mapComponent/MapComponentMobile';

import './HomePage.css';

const HomePage = () => {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();

  return (
    <>
      <Hero />
      <ServiceList />
      <CommentSlider />
      {width > 767 && <PacientPhotoList />}
      <div className="CenterInfoWrapper">
        <Link className="ServiceLink" to="/contacts" exact="true">
          <p className="CenterInfo">
            {t('Наша адреса:')}
            <b> {t('м. Лівобережна, вулиця Ентузіастів, 39')}</b>
          </p>
          <p className="CenterInfo">
            {t('Час роботи:')} <br />
            {t('ПН-ПТ 08:00–20:00')} <br /> {t('СБ 09:00-17:00')}
          </p>
        </Link>
          <img src={map} className="Map" alt="Map" />
        {/* {width > 767 && <MapComponent />} */}
        {/* {width < 767 && <MapComponentMobile />} */}
      </div>
    </>
  );
};

export default HomePage;
