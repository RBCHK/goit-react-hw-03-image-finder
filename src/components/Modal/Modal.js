import React from 'react';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

const Modal = ({ closeModal, largeImgURL, images }) => {
  return (
    <div className={s.Overlay} onClick={closeModal} role="presentation">
      <div className={s.Modal}>
        {images.map(image => (
          <img key={image.id} src={largeImgURL} alt="" />
        ))}
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImgURL: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default Modal;
