import React from "react";
import { join } from "../../utils";
import './_index.scss';

export default function Button({ children, className, ...props }) {
  return (
    <button className={join("button-container", 'p', className)} {...props}>
      {children}
    </button>
  );
}
