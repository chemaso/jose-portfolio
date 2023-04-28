import React from "react";
import { join } from "../../utils";
import "./_index.scss";

const Scroller = ({ onShuffle, style }) => {
  let className = style ? "dark" : "light";

  return (
    <div>
      <button
        aria-label='change the page color pallete'
        onClick={() => onShuffle("mobile")}
        className={join("scroller-container", "mobile")}
      >
        <div className={join("scroller", className)}>
          <div className={join("scroller-circle", className)}></div>
        </div>
        <div className={join("scroller-text", className)}>
          <p>SHUFFLE!</p>
        </div>
      </button>
      <button
        onClick={onShuffle}
        className={join("scroller-container", "desktop")}
      >
        <div className={join("scroller", className)}>
          <div className={join("scroller-circle", className)}></div>
        </div>
        <div className={join("scroller-text", className)}>
          <p>SHUFFLE!</p>
        </div>
      </button>
    </div>
  );
};

export default Scroller;
