import React from 'react';
import PropTypes from 'prop-types';
import './_index.scss';

function Boxes({ data }) {
  return (
    <div role="list" className="boxes-container">
      {data?.map((item) => (
        <div key={item.id} role="listitem" className="boxes-item">
          <div className="p boxes-label">{item?.label}</div>
          <div className="p boxes-value">{item?.value}</div>
        </div>
      ))}
    </div>
  );
}

Boxes.propTypes = {
  data: PropTypes.array
};

export default Boxes;
