import React from 'react';
import PropTypes from 'prop-types';
import { useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const desktopLg = 5;
const desktop = 4;
const laptop = 3;
const tablet = 2;

const isDesktopLg = (width) => width >= desktopLg;
const isDesktop = (width) => width < desktopLg && width >= desktop;
const isLaptop = (width) => width < desktop && width >= laptop;
const isTablet = (width) => width < laptop && width >= tablet;

const getTextSize = (width, fontSize) => {
  switch (true) {
    case isDesktopLg(width):
      return (desktopLg * 1.2) / fontSize;
    case isDesktop(width):
      return (desktop * 1.2) / fontSize;
    case isLaptop(width):
      return laptop / fontSize;
    case isTablet(width):
      return tablet / fontSize;
    default:
      return tablet / fontSize;
  }
};
const getPosition = (width, position, level) => {
  let positionUpdated = [...position];
  switch (true) {
    case isDesktopLg(width):
      return position;
    case isDesktop(width):
      if (level === 1) {
        positionUpdated[1] = 0.6;
      }
      if (level === 3) {
        positionUpdated[1] = -0.7;
      }
      return positionUpdated;
    case isLaptop(width):
      if (level === 1) {
        positionUpdated[1] = 0.3;
        positionUpdated[1] = 0.4;
      }
      if (level === 3) {
        positionUpdated[1] = -0.5;
      }
      return positionUpdated;
    case isTablet(width):
      if (level === 1) {
        positionUpdated[0] = -0.5;
        positionUpdated[1] = 0.3;
      }
      if (level === 3) {
        positionUpdated[0] = 0.2;
        positionUpdated[1] = -0.3;
      }
      return positionUpdated;
    default:
      if (level === 1) {
        positionUpdated[0] = -0.5;
        positionUpdated[1] = 0.3;
      }
      if (level === 3) {
        positionUpdated[0] = 0.2;
        positionUpdated[1] = -0.3;
      }
      return positionUpdated;
  }
};

export default function Caption({
  children,
  position,
  fontSize,
  lineHeight,
  color,
  fill = 1,
  shuffle,
  level
}) {
  const { width } = useThree((state) => state.viewport);
  let shadow = {
    outlineOffsetX: '2%',
    outlineOffsetY: '2%',
    outlineBlur: '0%',
    outlineOpacity: 0.9,
    outlineColor: color
  };
  if (fill === 1) {
    shadow = {};
  }

  const darkStyle = shuffle?.style ? 'black' : 'white';

  const textSize = getTextSize(width, fontSize);
  const positionValue = getPosition(width, position, level);
  return (
    <Text
      position={positionValue}
      lineHeight={lineHeight}
      font="/Prompt-Bold.ttf"
      fontSize={textSize}
      color={color}
      fillOpacity={fill}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle"
      strokeWidth={fill !== 1 ? '0.5%' : '0'}
      strokeColor={fill !== 1 ? darkStyle : color}
      {...shadow}>
      {children}
    </Text>
  );
}

Caption.propTypes = {
  children: PropTypes.children,
  position: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  color: PropTypes.string,
  fill: PropTypes.number,
  level: PropTypes.string,
  shuffle: PropTypes.objectOf({
    style: PropTypes.string
  })
};
