import { useTranslation } from 'react-i18next';
import qrCode from '../../images/qr.png';
import './QrCode.css';

const QrCode = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className="QR-text"> {t('Залиште свій відгук, перейшовши за QR-кодом')}</p>
      <a
        className="QR-Link"
        target="_blank"
        rel="noreferrer"
        href="https://www.google.com/search?q=%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D1%8B+%D0%B4%D0%BE%D0%BA%D1%82%D0%BE%D1%80+%D0%BA%D1%80%D0%BE%D0%BB%D0%B8%D0%BA&sxsrf=AOaemvL3B9rysZADrV5HsGnBD-XD7i8Yxg%3A1638430181011&ei=5HWoYZmBPeyQxc8P6uOEmA8&ved=0ahUKEwiZg7aHzMT0AhVsSPEDHeoxAfMQ4dUDCA8&uact=5&oq=%D0%BE%D1%82%D0%B7%D1%8B%D0%B2%D1%8B+%D0%B4%D0%BE%D0%BA%D1%82%D0%BE%D1%80+%D0%BA%D1%80%D0%BE%D0%BB%D0%B8%D0%BA&gs_lcp=Cgdnd3Mtd2l6EAMyCAghEBYQHRAeOgcIABBHELADOgcIABCwAxBDOhAILhDHARDRAxDIAxCwAxBDOhAILhDHARCjAhDIAxCwAxBDOgQIABBDOgcIABCxAxBDOgUIABCABDoLCAAQgAQQsQMQyQM6BQgAEJIDOgoIABCABBCHAhAUOgYIABAWEB46CQgAEMkDEBYQHjoECAAQDUoECEEYAFBUWKwhYP0jaAFwAngAgAGdAYgBoQqSAQQxMi4ymAEAoAEByAELwAEB&sclient=gws-wiz#lrd=0x40d4cf8cb2b9bb45:0x315b37bb59b823db,1,,,"
      >
        <img src={qrCode} className="QR-code" alt="QR-Code" />
      </a>
    </>
  );
};

export default QrCode;
