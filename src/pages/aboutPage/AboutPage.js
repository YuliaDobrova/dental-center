import React from 'react';
import { useTranslation } from 'react-i18next';
import useWindowDimensions from '../../components/hooks/widthHook';
import doctorsData from './doctorsData/doctors-data.json';
import photo from './doctorsData/photo';
import cabinetPhoto from '../../images/cabinet-min.png';
import enterancePhoto from '../../images/enterance-min.png';
import toolsPhoto from '../../images/tools-min.png';
import './AboutPage.css';
// import ImageGallery from '../../components/imageGallery/ImageGallery';

const AboutPage = () => {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  return (
    <>
      <div className="DoctorsWrapper">
        {width > 1250 && (
          <img src={cabinetPhoto} className="cabinetPhoto Photo" alt="CabinetPhoto" />
        )}
        <ul className="DoctorsList">
          {doctorsData.map(data => (
            <li className="DoctorsListItem" key={data.id}>
              <img
                src={photo[data.id]}
                alt={data.name}
                className="DoctorsImg"
                width="220"
                height="200"
              />
              <h2 className="DoctorsImgText Surname">{t(data.surname)}</h2>
              <h3 className="DoctorsImgText Name">{t(data.name)}</h3>
              <p className="DoctorsImgText Position">{t(data.position)}</p>
              <p className="DoctorsImgText Experience">
                {t('Досвід роботи:')} {t(data.experience)}
              </p>
            </li>
          ))}
        </ul>
        {/* {width < 1250 && <ImageGallery />} */}

        {width < 767 && (
          <div className="ClinicMobilePhotos">
            <img src={enterancePhoto} className="enterancePhoto Photo" alt="EnterancePhoto" />
            <img src={cabinetPhoto} className="cabinetPhoto Photo" alt="CabinetPhoto" />
            <img src={toolsPhoto} className="toolsPhoto Photo" alt="ToolsPhoto" />
          </div>
        )}
        {width > 767 && width < 1250 && (
          <div className="ClinicTabletPhotos">
            <img src={cabinetPhoto} className="cabinetPhoto Photo" alt="CabinetPhoto" />
            <div className="ClinicTabletPhotosRightWrapper">
              <img src={enterancePhoto} className="enterancePhoto Photo" alt="EnterancePhoto" />
              <img src={toolsPhoto} className="toolsPhoto Photo" alt="ToolsPhoto" />
            </div>
          </div>
        )}
        {width > 1250 && (
          <div>
            <img
              src={enterancePhoto}
              className="enterancePhoto Photo"
              alt="EnterancePhoto"
              width="420"
            />
            <div className="DoctorsTextWrapper">
              <p className="DoctorsText">
                {t('Стоматологія доктора Кролика – це безболісне та якісне лікування зубів.')}
              </p>
            </div>
            <img src={toolsPhoto} className="toolsPhoto Photo" alt="ToolsPhoto" width="420" />
          </div>
        )}
      </div>
      {/* <div className="WrapperInfo">
        <h3>Вы должны знать, что:</h3>
        <ul>
          <li>
            <h4>1. Лечение зубов безопасно и без боли. </h4>
            <p>
              По статистике у 4 из 5 людей посещение стоматолога ассоциируется с
              болезненными процедурами. Однако современные технологии
              обезбаливания позволяют лечить зубы без боли, а неприятные
              ощущения делают незаметными. В стоматологическом центре доктора
              Кролика используются передовые технологии и средства анестезии.
            </p>
          </li>
          <li>
            <h4>
              2. «Слишком запущенных» случаев в стоматологии для нас не
              существует.
            </h4>
            <p>
              Если Вы считаете, что состояние Ваших зубов "слишком запущенное" и
              лечение будет дорогим и мучительным - просто загляните на
              бесплатную консультацию. После осмотра профессионал скажет, что
              можно сделать конкретно в вашем случае и подберет для вас
              оптимальное решение по вашему кошельку. Опыт позволяет утверждать,
              что все ситуации разрешимы, а страхи пациентов просто надуманны.
            </p>
          </li>
          <li>
            <h4>3. Наши цены не угрожают семейному бюджету. </h4>
            <p>
              Каждый случай по-своему уникален и стоимость предстоящих процедур
              выясняется только после осмотра стоматологом. Не всегда нужно
              платить по максимальной планке. Также важно помнить, что
              комплексное лечение зубов - процесс, часто требующий перерывов от
              недели до нескольких месяцев, поэтому всегда есть время на
              пополнение бюджета на уход за зубами. Записывайтесь на прием в
              стоматологический центр доктора Кролика, а мы в свою очередь
              поможем Вам решить зубные проблемы с минимальными затратами!
            </p>
          </li>
        </ul>
        <h3>
          И не забывайте: своевременный профилактический осмотр у стоматолога
          позволит избежать неприятных ощущений и лишних расходов!
        </h3>
        <p>
          Стоматология доктора Кролика выполняет весь объем диагностики и
          лечения заболеваний дентального характера. Прием ведет
          врач-стоматолог, хирург, имплантолог. Пациентам предложен широкий
          набор услуг: консультация специалиста; рентгенография зуба; снятие
          зубного камня; гигиена ротовой полости; отбеливание эмали; лечение
          кариеса; протезирование; эстетическая реставрация; пломбирование;
          шинирование; удаление зубов; синус-лифтинг. Используются материалы
          высокого качества, современные методы лечения. Кабинет оснащен
          новейшим оборудованием. Стоматология доктора Кролика — это
          безболезненное и качественное лечение зубов.
        </p>
      </div> */}
    </>
  );
};

export default AboutPage;
