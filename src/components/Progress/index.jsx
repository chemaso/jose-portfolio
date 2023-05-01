import React from 'react';
import PropTypes from 'prop-types';
import { join } from '../../utils';
import { useTheme } from '../AppProvider';
import './_index.scss';

export function Progress({ level, show }) {
  const { shuffle } = useTheme();
  return (
    <div className={join('progress-container', shuffle?.title)}>
      <div
        style={{ width: `${level}%` }}
        className={join('progress-fill', shuffle?.title, show)}></div>
    </div>
  );
}

export function ProgressWithLabel({ label, show, ...props }) {
  return (
    <div className="progress-label-container">
      <div>
        <p className="p progress-label">{label}</p>
      </div>
      <Progress show={show} {...props} />
    </div>
  );
}

export default function ProgressList({ items, show, ...props }) {
  const showClass = show ? 'show' : '';
  return (
    <div className={join('progress-list', showClass)}>
      {items?.map((item, index) => (
        <ProgressWithLabel key={`${item.level}-${index}`} show={showClass} {...item} {...props} />
      ))}
    </div>
  );
}

Progress.propTypes = {
  level: PropTypes.string,
  show: PropTypes.string
};
ProgressList.propTypes = {
  items: PropTypes.object,
  show: PropTypes.string
};
ProgressWithLabel.propTypes = {
  label: PropTypes.string,
  show: PropTypes.string
};
