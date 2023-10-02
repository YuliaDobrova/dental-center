import React, { useState } from 'react';
import imageGalleryData from './imageGalleryData.json';
import photoGallery from './photoGallery';
import './ImageGallery.css';

const ImageGallery = () => {
  const [activeSlide, setActiveSlide] = useState(null);
  const slides = document.querySelector('imageGalleryData');

  // console.log(`slides`, slides);
  const toggleActiveSlides = () => {
    if (activeSlide) {
      onNotActiveSlide();
    }
    onActiveSlide();
  };

  function onActiveSlide() {
    setActiveSlide(true);
    slides.forEach(slide => {
      slide.classList.add('active');
    });
  }

  function onNotActiveSlide() {
    setActiveSlide(false);
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
  }

  return (
    <ul className="gallerySlideList">
      {imageGalleryData.map(image => (
        <li className="gallerySlideItem" key={image.id} onClick={toggleActiveSlides}>
          <img
            src={photoGallery[image.id]}
            alt={image.name}
            className="gallerySlide"
            width="250"
            height="250"
          />
          <h3 className="">{image.name}</h3>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
