import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { shuffleOptions } from '../../constants';
import StyleContext from '../../context';

const AppProvider = ({ children }) => {
  const [shuffle, setShuffle] = useState({});
  const [styleIndex, setStyleIndex] = useState(0);
  const [globalLoading, setGlobalLoading] = useState(true);

  useEffect(() => {
    setShuffle(shuffleOptions[0]);
  }, []);

  const value = {
    shuffle,
    onShuffle: setShuffle,
    styleIndex,
    setGlobalLoading,
    globalLoading,
    onStyleIndex: setStyleIndex
  };

  return <StyleContext.Provider value={value}>{children}</StyleContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.children
};

export const useTheme = () => useContext(StyleContext);

export default AppProvider;
