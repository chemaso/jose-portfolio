import React from 'react';
import PropTypes from 'prop-types';
import { join } from '../../utils';
import './_index.scss';

function Button({ children, className, component = 'button', ...props }) {
  const Component = component;
  return (
    <Component className={join('button-container', 'p', className)} {...props}>
      {children}
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.children,
  component: PropTypes.string,
  className: PropTypes.string
};

export default Button;
