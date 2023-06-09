import React from 'react';
import PropTypes from 'prop-types';
import { join } from '../../utils';
import './_index.scss';

export default function ContentWrapper({ children, className, align, ...props }) {
  return (
    <div className={className} {...props}>
      <div className={join('content-wrapper', align)}>{children}</div>
    </div>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.children,
  className: PropTypes.string,
  align: PropTypes.string
};
