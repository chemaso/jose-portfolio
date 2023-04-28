import { useState, useContext, useEffect } from "react";
import { shuffleOptions } from "../../constants";
import StyleContext from "../../context";

const AppProvider = ({ children }) => {
  const [shuffle, setShuffle] = useState({});
  const [styleIndex, setStyleIndex] = useState(0);

  useEffect(() => {
    setShuffle(shuffleOptions[0])
  }, [])

  const value = {
    shuffle,
    onShuffle: setShuffle,
    styleIndex,
    onStyleIndex: setStyleIndex
  };

  return (
    <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
  );
};

export const useTheme = () => useContext(StyleContext);

export default AppProvider;
