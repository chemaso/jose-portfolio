import React, { useState } from 'react';
import Title from '../Title';
import { useNavigate } from 'react-router-dom';
import ContentWrapper from '../ContentWrapper';
import { useTheme } from '../AppProvider';
import { join, useIntersectionObserver } from '../../utils';
import { shuffleOptions, workTitleOptions, products } from '../../constants';

import './_index.scss';

export default function WorkHome() {
  const { shuffle, onShuffle, styleIndex } = useTheme();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const className = shuffle?.style ? 'dark' : 'light';

  const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) => {
    entries.forEach((entry) => {
      if (entry?.isIntersecting) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  const handleExpandMenu = (route, size) => {
    const elemId = size === 'mobile' ? 'navigation-mobile' : 'site-logo-container';
    if (typeof document !== `undefined`) {
      const element = document.getElementById(elemId);
      element.classList.remove(elemId);
      void element.offsetWidth;
      element.classList.add(elemId);
    }

    setTimeout(() => {
      navigate(route);
    }, 500);
  };

  const handleOnMouseLeave = () => {
    const selected = shuffleOptions[styleIndex];
    if (selected) {
      onShuffle(selected);
    }
  };

  const handleOnMouseEnter = (item) => {
    const selected = shuffleOptions?.find((option) => option.title === item);
    if (selected) {
      onShuffle(selected);
    }
  };

  const showClass = show ? 'show' : '';

  return (
    <>
      <ContentWrapper className={join('work-me-container', shuffle?.title)}>
        <div ref={cbRef} className="ref-container-styles" />
        <div className={join('work-content-col', 'flex-center-xy')}>
          <div role="list" className={join('work-portfolio-wrapper', 'desktop', 'flex')}>
            {products.map((item) => {
              let route = `/work/${item.title}`;
              if (item.title === 'freelance') {
                route = 'work#more';
              }
              return (
                <button
                  aria-label={`navigate to portfolio: ${item.title} page`}
                  role="listitem"
                  key={item.id}
                  onMouseEnter={() => handleOnMouseEnter(item?.title)}
                  onFocus={() => handleOnMouseEnter(item?.title)}
                  onMouseLeave={handleOnMouseLeave}
                  onBlur={handleOnMouseLeave}
                  onClick={() => handleExpandMenu(route)}
                  id={item?.id}
                  className={join(
                    'work-portfolio-item',
                    'flex-center-xy',
                    showClass,
                    shuffle?.title
                  )}>
                  <img
                    className={join('work-portfolio-item-image', className)}
                    src={item?.background}
                  />
                </button>
              );
            })}
          </div>
          <div role="list" className={join('work-portfolio-wrapper', 'mobile', 'flex')}>
            {products.map((item) => {
              let route = `/work/${item.title}`;
              if (item.title === 'freelance') {
                route = 'work#more';
              }
              return (
                <button
                  role="listitem"
                  key={item.id}
                  onTouchStart={() => handleOnMouseEnter(item?.title)}
                  onFocus={() => handleOnMouseEnter(item?.title)}
                  onTouchEnd={handleOnMouseLeave}
                  onBlur={handleOnMouseLeave}
                  onClick={() => handleExpandMenu(route, 'mobile')}
                  id={item?.id}
                  className={join(
                    'work-portfolio-item',
                    'flex-center-xy',
                    showClass,
                    shuffle?.title
                  )}>
                  <img
                    className={join('work-portfolio-item-image', className)}
                    src={item?.background}
                  />
                </button>
              );
            })}
          </div>
          <div className="work-background">
            {workTitleOptions?.map((item) => (
              <Title
                key={item.id}
                shuffle={shuffle}
                show={true}
                delay={item?.delay}
                id={item.id}
                wrapperId={item.id}
                className={item.className}
                component="h2">
                {item.title}
              </Title>
            ))}
          </div>
          <div className="work-background-mobile">
            {workTitleOptions?.map((item) => (
              <Title
                key={item.id}
                shuffle={shuffle}
                show={true}
                delay={item?.delay}
                id={item.id}
                wrapperId={item.id}
                className={item.className}
                component="h2">
                {item.title}
              </Title>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}
