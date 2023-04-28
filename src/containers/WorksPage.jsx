import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../components/AppProvider";
import ContentWrapper from "../components/ContentWrapper";
import Title from "../components/Title";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import { products, shuffleOptions, freelanceImages } from "../constants";
import Carousel from "../components/Carousel";
import "../styles/global.scss";

export default function WorkPage() {
  const { onShuffle, styleIndex } = useTheme();
  const navigate = useNavigate();
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
  const handleExpandMenu = (route, size) => {
    const elemId =
      size === "mobile" ? "navigation-mobile" : "site-logo-container";
    const element = document.getElementById(elemId);
    element.classList.remove(elemId);
    void element.offsetWidth;
    element.classList.add(elemId);
    setTimeout(() => {
      navigate(route);
    }, 500);
  };
  return (
    <div>
      <div id="main" role="main" className="work-page-container">
        <ContentWrapper align="left">
          <div className="width-100">
            <Header
              component="h2"
              titleClassName="halftone halftone-color"
              id="work-container"
              subtle="Check out some of my recent projects"
            >
              PORTFOLIO
            </Header>
            <div role='list' className="work-list-container">
              {products
                ?.filter((item) => item.title !== "freelance")
                ?.map((item, index) => (
                  <ListItem
                    {...item}
                    key={`${item.title}-${index}`}
                    onClick={() => handleExpandMenu(item?.title)}
                    onMouseEnter={() => handleOnMouseEnter(item?.title)}
                    onMouseLeave={handleOnMouseLeave}
                    onFocus={() => handleOnMouseEnter(item?.title)}
                    onBlur={handleOnMouseLeave}
                    pill={item.label}
                    title={item.name}
                    subtle={item.role}
                    isLast={item.title === "starmeup"}
                  />
                ))}
            </div>
            <div className="work-list-container-mobile">
              {products
                ?.filter((item) => item.title !== "freelance")
                ?.map((item, index) => (
                  <ListItem
                    {...item}
                    key={`${item.title}-${index}`}
                    onClick={() => handleExpandMenu(item?.title, "mobile")}
                    onTouchStart={() => handleOnMouseEnter(item?.title)}
                    onTouchEnd={handleOnMouseLeave}
                    pill={item.label}
                    title={item.name}
                    subtle={item.role}
                    isLast={item.title === "starmeup"}
                  />
                ))}
            </div>
            <div className="work-more" id="more">
              <Title
                id="work-overview-title"
                className="shadow"
                show
                delay={0}
                component="h3"
              >
                MORE PROJECTS:
              </Title>
              <p className="p">
                Check some of my previous projects (2016-2018).
              </p>
              <Carousel items={freelanceImages} />
              <Carousel items={freelanceImages} reverse />
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
}
