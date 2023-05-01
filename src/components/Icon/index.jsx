import React from 'react';
import PropTypes from 'prop-types';
import { join } from '../../utils';

export const Icon = ({ ariaLabel, classNames, children }) => {
  return (
    <i
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      className={join(`material-icons`, classNames)}>
      {children}
    </i>
  );
};

Icon.propTypes = {
  ariaLabel: PropTypes.string,
  classNames: PropTypes.string,
  children: PropTypes.children
};
