import React, { useEffect, useState, useContext } from "react";
import { join } from "../../utils";
import { colors } from "../../constants";
import { useTheme } from '../AppProvider';
import "./_index.scss";


const Title = ({
  children,
  id,
  wrapperId,
  className,
  show,
  delay,
  component = 'h1',
  ariaLevel = 'h1',
}) => {
  const TitleTag = ariaLevel;
  const { shuffle } = useTheme()
  const [showClass, setShowClass] = useState("");
  useEffect(() => {
    if (!wrapperId) {
      return;
    }
    const elem = document.getElementById(wrapperId);
    if (!id) {
      return;
    }
    elem?.addEventListener("mousemove", handleMouseMovement, true);
    elem?.addEventListener(
      "mouseleave",
      (e) => handleMouseMovement(e, "remove"),
      true
    );
    return () => {
      elem?.removeEventListener("mousemove", handleMouseMovement);
      elem?.removeEventListener("mouseleave", handleMouseMovement);
    };
  });

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShowClass("show");
      }, delay);
    } else {
      setTimeout(() => {
        setShowClass("");
      }, delay);
    }
  }, [show]);

  const handleMouseMovement = (event, remove) => {
    if (!id) {
      return;
    }
    if (remove) {
      document.getElementById(id).style.textShadow = "";
      return;
    }
    const mousePos = { x: event.clientX, y: event.clientY };
    const centerCoordinates = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    const xCoor = `${(mousePos?.x - centerCoordinates?.x) / 50}px`;
    const yCoor = `${(mousePos?.y - centerCoordinates?.y) / 50}px`;
    document.getElementById(id).style.textShadow = `${xCoor} ${yCoor} ${
      colors[shuffle?.title]
    }`;
  };

  let toneClass = shuffle?.style ? "dark" : "light";

  return (
    <div className={join("stand", showClass)}>
      <div className="grid">
        <TitleTag
          data-value={children}
          id={id}
          className={join("stroke", toneClass, shuffle.title, component, className)}
        >
          {children}
        </TitleTag>
      </div>
    </div>
  );
};

export default Title;
