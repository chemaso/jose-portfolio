import React from 'react';
import PropTypes from 'prop-types';
import { join } from '../../utils';
import './_index.scss';

const CarouselItem = ({ item }) => {
  return (
    <div className="slide">
      <img src={item.url} className="slide-img" alt={item.alt} />
    </div>
  );
};

export default function Carousel({ items, reverse }) {
  const reverseClass = reverse ? 'reverse' : '';
  return (
    <div className="slider">
      <div className={join('slide-track', reverseClass)}>
        {items?.map((item, index) => (
          <CarouselItem key={`${item.alt}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  item: PropTypes.objectOf({
    url: PropTypes.string,
    alt: PropTypes.string
  })
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(CarouselItem.propTypes),
  reverse: PropTypes.bool
};
