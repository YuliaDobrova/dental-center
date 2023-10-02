import React, { useState, useEffect, Suspense } from 'react';
import Loader from 'react-loader-spinner';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import ContactForm from './components/contactForm';
import SuccessMessageModal from './components/successMessageModal/SuccessMessageModal';
import BackToTop from './components/scroll/backToTop/BackToTop';
import Modal from './components/modal/Modal';
import BurgerMenu from './components/burgerMenu/BurgerMenu';

const App = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showModalBurgerMenu, setShowModalBurgerMenu] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // TO TOP BUTTON
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // FORM  MODAL
  const openFormModal = () => {
    setShowFormModal(true);
  };

  const closeFormModal = () => {
    setShowFormModal(false);
  };

  // SUCCESS  MODAL
  const openSuccessModal = () => {
    setShowFormModal(false);
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  // BURGER  MODAL
  const openBurgerMenu = () => {
    setShowModalBurgerMenu(true);
  };

  const closeBurgerMenu = () => {
    setShowModalBurgerMenu(false);
  };

  return (
    <>
      <Suspense
        fallback={<Loader type="Bars" color="#81adde" height={80} width={80} className="loader" />}
      >
        <Header openModal={openFormModal} openBurgerModal={openBurgerMenu} />
        <Main />
        <Footer toggleModal={openFormModal} openBurgerModal={openBurgerMenu} />
        {showButton && <BackToTop />}
        {showFormModal && (
          <Modal onClose={closeFormModal} active={showFormModal} setActive={setShowFormModal}>
            <ContactForm onClose={closeFormModal} openSuccessModal={openSuccessModal} />
          </Modal>
        )}
        {showSuccessModal && (
          <Modal
            onClose={closeSuccessModal}
            active={showSuccessModal}
            setActive={setShowSuccessModal}
          >
            <SuccessMessageModal onClose={closeSuccessModal} />
          </Modal>
        )}
        {showModalBurgerMenu && (
          <Modal
            onClose={closeBurgerMenu}
            active={showModalBurgerMenu}
            setActive={setShowModalBurgerMenu}
          >
            <BurgerMenu closeBurgerMenu={closeBurgerMenu} />
          </Modal>
        )}
      </Suspense>
    </>
  );
};

export default App;
