import React, { useState } from 'react';
import { useTheme } from '../AppProvider';
import Title from '../Title';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import ContentWrapper from '../ContentWrapper';
import CanvasMask from '../CanvasMask';
import { join, useIntersectionObserver } from '../../utils';
import { aboutTitleOptions } from '../../constants';
import './_index.scss';

export default function AboutHome() {
  const { shuffle } = useTheme();
  const [show, setShow] = useState(false);

  const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) => {
    entries.forEach((entry) => {
      if (entry?.isIntersecting) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  const navigate = useNavigate();
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

  return (
    <ContentWrapper className={join('about-me-container', 'flex-center-xy')}>
      <div className={join('about-me-flex-container', 'flex-center-xy')}>
        <div id="about-me-container" className={join('about-me-two-col')}>
          <CanvasMask speed={1} depth={50} easing={(x) => Math.sqrt(1 - Math.pow(x - 1, 2))} />
          <div className="about-me-col-1-overlay"></div>
          <div className="about-me-col-1-title flex-center-xy">
            <div>
              {aboutTitleOptions?.map((item) => (
                <Title
                  key={item.key}
                  shuffle={shuffle}
                  show={show}
                  delay={item?.delay}
                  id={item.id}
                  wrapperId="about-me-container"
                  className={item.className}>
                  {item.title}
                </Title>
              ))}
            </div>
          </div>
        </div>
        <div className="about-me-col-2">
          <div className={join('about-me-col-2-content', show ? 'show' : '')}>
            <div ref={cbRef} className="ref-container-styles" />

            <p className="p">
              I&apos;m Jose M. Aguilar a Software developer with 6 years of experience. I&apos;m
              passionate about creating innovative and user-friendly web applications that deliver
              exceptional user experiences. I have experience in Graphic Design, which allows me to
              bring a unique perspective to my development projects, combining my technical skills
              with a keen eye for aesthetics and usability.
            </p>
            <Button
              aria-label="navigate to about page."
              onClick={() => handleExpandMenu('about')}
              className={join('p', shuffle?.title)}>
              READ MORE
            </Button>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
