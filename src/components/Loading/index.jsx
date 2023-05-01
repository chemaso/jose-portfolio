import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import { join } from '../../utils';
import './_index.scss';

function Loading({ shuffle }) {
  return (
    <div className={join('loading-container', shuffle.title)}>
      <Logo style={shuffle?.style} className={join('mixin-blend-mode', 'loading-logo')} />
    </div>
  );
}

Loading.propTypes = {
  shuffle: PropTypes.objectOf({
    title: PropTypes.string
  })
};

export default Loading;
