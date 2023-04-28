import React from 'react';

export const join = (...classNames) => {
    return classNames
      .filter(Boolean)
      .map(str => str.trim())
      .join(' ');
  };

export const useIntersectionObserver = (options, cb) => {
  const observer = React.useRef(null)

  return React.useCallback((node) => {
    if (!node) {
      if (observer.current) {
        observer.current.disconnect()
      }
      return
    }

    observer.current = new window.IntersectionObserver(cb, options)
    observer.current.observe(node)
  }, [])
}
