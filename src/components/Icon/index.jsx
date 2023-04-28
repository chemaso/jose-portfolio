import React from 'react';
import { join } from '../../utils'

export const Icon = ({ ariaLabel, classNames, children }) => {
    return (
        <i
          aria-label={ariaLabel}
          aria-hidden={!ariaLabel}
          className={join(`material-icons`, classNames)}
        >
          {children}
        </i>
      );
}