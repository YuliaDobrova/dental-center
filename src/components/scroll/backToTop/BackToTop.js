import sprite from '../../../images/sprite.svg';
import './BackToTop.css';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button className="BackToTopButton" onClick={scrollToTop} type="button">
      <svg className="arrowIcon">
        <use href={sprite + '#icon-arrowToTop'}></use>
      </svg>
    </button>
  );
};

export default BackToTop;
