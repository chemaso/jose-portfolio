import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import { join } from '../../utils';
import './_index.scss';
import { useTheme } from '../AppProvider';

function Loading({ shuffle }) {
  const { globalLoading } = useTheme();
  const hideClass = globalLoading ? '' : 'hide';
  return (
    <div className={join('loading-container', hideClass, shuffle.title)}>
      <Logo
        style={shuffle?.style}
        className={join('mixin-blend-mode', 'loading-logo', hideClass)}
      />
    </div>
  );
}

Loading.propTypes = {
  shuffle: PropTypes.objectOf({
    title: PropTypes.string
  })
};

export default Loading;
