import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.module.css';

const Button = ({ loadMore }) => {
  return (
    <div className={s.div}>
      <button onClick={loadMore} type="button" className={s.Button}>
        Load More
      </button>
    </div>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
