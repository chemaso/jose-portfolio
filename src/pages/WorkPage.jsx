import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import NextProduct from '../components/Next';
import Boxes from '../components/Boxes';
import ContentWrapper from '../components/ContentWrapper';
import Header from '../components/Header';
import ProgressList from '../components/Progress';
import Title from '../components/Title';
import { useIntersectionObserver } from '../utils';
import { contents, products } from '../constants';
import '../styles/global.scss';
import Carousel from '../components/Carousel';

export default function WorkPage() {
  const navigate = useNavigate();
  const { id: productId } = useParams();
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [nextProduct, setNext] = useState(products[0]);

  const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) => {
    entries.forEach((entry) => {
      if (entry?.isIntersecting) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.scrollTo(0, 0);
    }
    const contentsData = contents?.filter((item) => item.id !== 'freelance');
    const index = contentsData.findIndex((item) => item.id === productId);
    if (contentsData[index]) {
      setData(contentsData[index]);
    }
    if (contentsData[index + 1]) {
      setNext(products[index + 1]);
    } else {
      setNext(products[0]);
    }
  }, [productId]);

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

  const items = data?.images?.map((item) => ({ url: item, alt: item?.title }));
  return (
    <div>
      <div id="main" role="main" className="work-page-container">
        <ContentWrapper align="left">
          <div className="width-100">
            <Header
              component="h2"
              titleClassName="halftone halftone-color"
              id="work-container"
              subtle={data?.subtle}>
              {data?.product}
            </Header>
            <div className="work-boxes-container">
              <Boxes data={data?.boxes} />
            </div>
            <div className="work-overview-container">
              <Title
                id="work-overview-title"
                className=""
                show
                delay={0}
                component="h3"
                ariaLevel="h2">
                OVERVIEW:
              </Title>
              {data?.overview.map((item, index) => (
                <p key={`${item.alt}-${index}`} className="p work-overview-content">
                  {item}
                </p>
              ))}
            </div>
            <div className="work-images-container">
              <Carousel items={items} />
            </div>
            <div className="work-stack-container">
              <Title
                id="work-overview-title"
                className=""
                show
                delay={0}
                component="h3"
                ariaLevel="h2">
                TECH STACK:
              </Title>
              <div ref={cbRef} className="ref-container-styles" />
              <ProgressList items={data?.stack} show={show} />
            </div>
            <div className="work-stack-container">
              <Title
                id="work-overview-title"
                className=""
                show
                delay={0}
                component="h3"
                ariaLevel="h2">
                NEXT PROJECT:
              </Title>
              <NextProduct nextProduct={nextProduct} onNext={handleExpandMenu} />
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
}
