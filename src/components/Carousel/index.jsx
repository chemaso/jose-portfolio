import React from "react";
import { join } from "../../utils";
import "./_index.scss";

const CarouselItem = ({ item }) => {
  return (
    <div class="slide">
      <img src={item.url} className="slide-img" alt={item.alt} />
    </div>
  );
};

export default function Carousel({ items, reverse }) {
  const reverseClass = reverse ? 'reverse' : '';
  return (
    <div class="slider">
      <div class={join("slide-track", reverseClass)}>
        {items?.map((item, index) => (
          <CarouselItem key={`${item.alt}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}
