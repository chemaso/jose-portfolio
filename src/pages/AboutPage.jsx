import React from 'react';

import ContentWrapper from '../components/ContentWrapper';
import ProgressList from '../components/Progress';
import Title from '../components/Title';
import Header from '../components/Header';
import { clients, skills } from '../constants';
import '../styles/global.scss';
import NextProduct from '../components/Next';
import { useNavigate } from 'react-router';

export default function AboutPage() {
  const navigate = useNavigate();
  const handleExpandMenu = (route, size) => {
    const elemId = size === 'mobile' ? 'navigation-mobile' : 'site-logo-container';
    const element = document.getElementById(elemId);
    element.classList.remove(elemId);
    void element.offsetWidth;
    element.classList.add(elemId);
    setTimeout(() => {
      if (typeof window !== `undefined`) {
        window.scrollTo(0, 0);
        navigate(route);
      }
    }, 500);
  };
  return (
    <div>
      <div className="work-page-container">
        <ContentWrapper align="left">
          <div id="main" role="main" className="width-100">
            <Header
              component="h2"
              titleClassName="halftone halftone-color"
              id="work-container"
              subtle="Helping Brands Succeed in the Digital Space.">
              ABOUT:
            </Header>
            <div className="about-content-container">
              <div className="about-content-image">
                <img src="https://jose-porfolio.s3.amazonaws.com/jose-pic.jpg" />
              </div>
              <div className="about-content-description">
                <p className="p">
                  {' '}
                  I&apos;m Jose M. Aguilar a Software developer with 6 years of experience. I&apos;m
                  passionate about creating innovative and user-friendly web applications that
                  deliver exceptional user experiences. I have experience in Graphic Design, which
                  allows me to bring a unique perspective to my development projects, combining my
                  technical skills with a keen eye for aesthetics and usability.
                </p>
                <p className="p">
                  Over the past decade, I&apos;ve honed my skills in a range of areas, including
                  frontend development using technologies like React and animations, as well as
                  backend development using Golang. I&apos;m also well-versed in the latest software
                  development methodologies, including Agile and DevOps, and I&apos;m always looking
                  for ways to improve my workflow and stay ahead of the curve.
                </p>
              </div>
            </div>
            <div className="work-stack-container">
              <Title
                id="work-overview-title"
                className=""
                show
                delay={0}
                component="h3"
                ariaLevel="h2">
                SKILLS:
              </Title>
              <ProgressList items={skills} show={true} />
            </div>
            <div className="about-content-container start">
              <div className="about-content-image">
                <p className="p">
                  It has been a privilege for me to partner with a wide range of clients, both big
                  and small, from all corners of the globe. Throughout my career, I have been
                  fortunate enough to work on several notable projects, and I am grateful for the
                  opportunity to share some of them with you here.{' '}
                </p>
              </div>
              <div className="about-content-image">
                {clients.map((item, index) => (
                  <Title
                    id={`work-overview-title-${index}`}
                    key={`work-overview-title-${index}`}
                    className=""
                    show
                    delay={0}
                    component="h2"
                    ariaLevel="h2">
                    {item}
                  </Title>
                ))}
              </div>
            </div>
            <div>
              <p style={{ color: 'black' }} className="p">
                Want to check some projects?
              </p>
              <NextProduct
                nextProduct={{
                  id: 'product-2',
                  name: 'CHECK THE PORTFOLIO',
                  background: '',
                  next: 'https://jose-porfolio.s3.amazonaws.com/google-1.jpg',
                  title: 'google',
                  label: 'Preact Web App',
                  role: 'Development & Animations'
                }}
                onNext={() => handleExpandMenu('/work')}
              />
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
}
