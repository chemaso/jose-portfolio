import React from "react";
import { join } from "../../utils";
import { useTheme } from "../AppProvider";
import Title from "../Title";
import "./_index.scss";

export default function Header({ children, id, component, delay, titleClassName, subtle }) {
const { shuffle } = useTheme();
const darkStyle = shuffle?.style ? 'dark' : '';

  return (
    <div className={join('header-container', shuffle?.title, darkStyle)}>
      <Title
        component={component}
        className={titleClassName}
        id={id}
        wrapperId={id}
        shuffle={shuffle}
        show={true}
        delay={delay}
      >
        {children}
      </Title>
      {subtle && <p className={join('p', 'dark')}>{subtle}</p>}
    </div>
  );
}
