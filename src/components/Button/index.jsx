import React from 'react';
import PropTypes from 'prop-types';
import { join } from '../../utils';
import './_index.scss';

function Button({ children, className, ...props }) {
  return (
    <button className={join('button-container', 'p', className)} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.children,
  className: PropTypes.string
};

export default Button;
