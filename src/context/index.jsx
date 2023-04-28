import React, { createContext } from 'react';
import { shuffleOptions } from '../constants';

const StyleContext = createContext(shuffleOptions[0]);

export default StyleContext;