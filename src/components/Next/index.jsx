import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import './_index.scss';

export default function NextProduct({ nextProduct, onNext }) {
  return (
    <button
      className="next-product"
      aria-label={`Navigate to next: ${nextProduct?.name}`}
      onClick={() => onNext(`/work/${nextProduct.title}`)}>
      <div className="next-product-container">
        <div
          className="next-product-image"
          style={{ backgroundImage: `url(${nextProduct?.next})` }}
        />
        <div className="next-product-overlay">
          <div className="next-product-bg">
            <h3>
              {nextProduct?.name} <Icon>arrow_forward_ios</Icon>
            </h3>
          </div>
        </div>
      </div>
    </button>
  );
}

NextProduct.propTypes = {
  nextProduct: PropTypes.objectOf({
    title: PropTypes.string,
    name: PropTypes.string
  }),
  onNext: PropTypes.func
};
