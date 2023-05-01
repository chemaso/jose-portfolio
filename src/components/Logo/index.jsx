import React from 'react';
import PropTypes from 'prop-types';
import { join } from '../../utils';
import './_index.scss';

function Logo({ style, className }) {
  const darkClass = style ? 'dark' : '';

  return (
    <div className={join('site-logo flex-center-xy', darkClass, className)}>
      <p className={join('site-logo-base', darkClass)}>J</p>
      <div className="site-logo-text-wrapper">
        <p className={join('site-logo-middle', darkClass)}>Jose Manuel</p>
        <p className={join('site-logo-bottom', darkClass)}>Aguilar</p>
      </div>
    </div>
  );
}

Logo.propTypes = {
  style: PropTypes.string,
  className: PropTypes.string
};

export default Logo;
