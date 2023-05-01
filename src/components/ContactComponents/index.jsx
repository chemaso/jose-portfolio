import React, { useState } from 'react';
import Title from '../Title';
import ContentWrapper from '../ContentWrapper';
import CanvasPhone from '../CanvasPhone';
import { useTheme } from '../AppProvider';
import { join, useIntersectionObserver } from '../../utils';

import './_index.scss';

export default function ContactHome() {
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

  return (
    <>
      <ContentWrapper className={join('contact-me-container', shuffle?.title)}>
        <div id="contact" className={join('contact-content-col', 'flex-center-xy')}>
          <div className="canvas-phone-contact">
            <CanvasPhone />
          </div>
          <div>
            <div>
              <p className={join('contact-title', 'p', show ? 'show' : '', shuffle?.title)}>
                DROP ME A MESSAGE:
              </p>
            </div>
            <a
              aria-label="DROP ME A MESSAGE: hello@joseaguilar.pt"
              href="mailto:hello@joseaguilar.pt"
              target="_blank"
              className="contact-email-container"
              rel="noreferrer">
              <Title
                key="contact-email"
                shuffle={shuffle}
                delay={500}
                show={show}
                id="contact-email-3"
                wrapperaId="contact-email-3"
                className=""
                component="h2">
                HELLO@
              </Title>
              <div ref={cbRef} />

              <Title
                key="contact-email-2"
                shuffle={shuffle}
                delay={750}
                show={show}
                id="contact-email-4"
                wrapperaId="contact-email-4"
                className="shadow"
                component="h2">
                JOSEAGUILAR.PT
              </Title>
            </a>

            <div>
              <p
                style={{ marginTop: '50px' }}
                className={join('contact-title', 'p', show ? 'show' : '', shuffle?.title)}>
                OR CHECK MY SOCIAL NETWORKS:
              </p>
              <a
                aria-label="CHECK MY SOCIAL NETWORKS: Linkedin"
                className="contact-linkedin"
                href="https://www.linkedin.com/in/chema-aguilar/"
                target="_blank"
                rel="noreferrer">
                <Title
                  key="contact-email-3"
                  shuffle={shuffle}
                  delay={1000}
                  show={show}
                  id="contact-likedin"
                  wrapperaId="contact-linkedin"
                  className="halftone"
                  component="h2">
                  LINKEDIN.
                </Title>
              </a>
              <a
                className="contact-twitter"
                aria-label="CHECK MY SOCIAL NETWORKS: Twitter"
                href="#"
                target="_blank">
                <Title
                  key="contact-email-4"
                  shuffle={shuffle}
                  delay={1250}
                  show={show}
                  id="contact-twitter"
                  wrapperaId="contact-twitter"
                  className="halftone halftone-color"
                  component="h2">
                  TWITTER.
                </Title>
              </a>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}
