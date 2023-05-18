import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '../AppProvider';
import Navigation from '../Navigation';
import Scroller from '../Scroller';
import Loading from '../Loading';

import { shuffleOptions, metaOptions } from '../../constants';

export default function SiteWrapper() {
  const { hash, pathname } = useLocation();
  const [meta, setMeta] = useState(metaOptions[0]);
  const { shuffle, onShuffle, onStyleIndex, styleIndex } = useTheme();
  useEffect(() => {
    if (typeof window !== `undefined` && typeof document !== `undefined`) {
      const goToTop = document.getElementById('go-up-button');

      window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
          goToTop.style.display = '';
        } else {
          goToTop.style.display = 'block';
        }
      });
    }
  });

  useEffect(() => {
    const condition = metaOptions?.find((item) => {
      if (hash.includes('#')) {
        return item.path === hash;
      } else {
        return item.path === pathname;
      }
    });
    if (condition) {
      setMeta(condition);
    }
    onShuffle(shuffleOptions[styleIndex]);
    setTimeout(() => {
      if (typeof window !== `undefined` && typeof document !== `undefined`) {
        if (hash !== '' && !hash.includes('main')) {
          window.scroll({
            top: document.body.scrollHeight
          });
        } else {
          window.scrollTo(0, 0);
        }
      }
    }, 150);
  }, [hash, pathname]);

  const handleShuffle = (size) => {
    let find = shuffleOptions.findIndex((item) => item.item === shuffle.item) + 1;
    if (find === shuffleOptions?.slice(0, 6).length) {
      find = 0;
    }

    const elemId = size === 'mobile' ? 'navigation-mobile' : 'site-logo-container';

    if (typeof document !== `undefined`) {
      const element = document.getElementById(elemId);
      element.classList.remove(elemId);
      void element.offsetWidth;
      element.classList.add(elemId);
    }
    const option = shuffleOptions[find];
    setTimeout(() => {
      onShuffle(option);
      onStyleIndex(find);
    }, 500);
  };

  const shuffleComponent = (
    <Scroller
      style={shuffle.style}
      shuffle={shuffle}
      onShuffle={handleShuffle}
      onMobileShuffle={() => handleShuffle('mobile')}
    />
  );

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <Loading shuffle={shuffle} />
      <Navigation style={shuffle.style} shuffle={shuffle} shuffleComponent={shuffleComponent} />
      <Outlet />
    </>
  );
}
