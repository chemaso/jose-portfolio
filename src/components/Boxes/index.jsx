import React from "react";
import './_index.scss';

export default function Boxes({ data }) {
  return (
    <div role='list' className="boxes-container">
      {data?.map((item) => (
        <div key={item.id} role='listitem' className="boxes-item">
          <div className="p boxes-label">{item?.label}</div>
          <div className="p boxes-value">{item?.value}</div>
        </div>
      ))}
    </div>
  );
}
