import sprite from '../../images/sprite.svg';
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="ContactsWrapper">
      <div className="ContactsPhone__Wrapper">
        <svg className="Contacts__icon-smartphone">
          <use href={sprite + '#icon-smartphone-2'} width="28"></use>
        </svg>
        <a className="Contacts__link-Phone" href="tel:+0671540333">
          (067) 154 0333
        </a>
        <a className="Contacts__link-Phone" href="tel:+0991540333">
          (099) 154 0333
        </a>
        <a className="Contacts__link-Phone" href="tel:+0731540333">
          (073) 154 0333
        </a>
      </div>
      <a className="Contacts__link-Email" href="mailto:2940530@gmail.com">
        <svg className="Contacts__icon-envelope">
          <use href={sprite + '#icon-envelope'} width="24"></use>
        </svg>
        2940530@gmail.com
      </a>
    </div>
  );
};

export default Contacts;
