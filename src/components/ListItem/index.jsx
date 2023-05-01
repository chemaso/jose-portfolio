import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../components/AppProvider';
import { join } from '../../utils';
import './_index.scss';

export default function ListItem({ pill, subtle, title, ...props }) {
  const { shuffle } = useTheme();
  return (
    <button
      {...props}
      aria-label={`navigate to ${title} job details`}
      role="listitem"
      className={join('list-item-item', shuffle?.title)}>
      <div className="list-item-content">
        <div className={join('list-item-label', shuffle.title)}>{pill}</div>
        <div className="list-item-title">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="list-item-subtle">
        <p className="p">{subtle}</p>
      </div>
    </button>
  );
}

ListItem.propTypes = {
  pill: PropTypes.string,
  subtle: PropTypes.string,
  title: PropTypes.string
};
