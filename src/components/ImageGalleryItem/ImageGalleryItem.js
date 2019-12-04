import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webImgURL, largeImgURL, openModal }) => {
  return (
    <li
      className={s.ImageGalleryItem}
      onClick={() => openModal(largeImgURL)}
      role="presentation"
    >
      <img src={webImgURL} alt="" className={s.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webImgURL: PropTypes.string.isRequired,
  largeImgURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
