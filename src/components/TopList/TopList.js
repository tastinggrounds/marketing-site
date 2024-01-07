import React from 'react';
import PropTypes from 'prop-types';

import './TopList.css';

export default function TopList({
  title, subtitle, items, alignment,
}) {
  const ulStyle = {
    textAlign: alignment,
  };

  return (
    <div className="top-list">
      <h2>{title}</h2>
      {subtitle && <h3 className="subtitle">{subtitle}</h3>}
      {items.length > 0 && (
        alignment === 'left' ? (
          <div className="top-item">
            {items[0].imageUrl && (
              <img src={items[0].imageUrl} alt={items[0].name} className="top-image" />
            )}
            <div className="item-info">
              <h3>
                1.&nbsp;
                {items[0].name}
              </h3>
              <p className="item-detail">{items[0].detail}</p>
            </div>
          </div>
        ) : (
          <div className="top-item">
            <div className="item-info">
              <h3>
                1.&nbsp;
                {items[0].name}
              </h3>
              <p className="item-detail">{items[0].detail}</p>
            </div>
            {items[0].imageUrl && (
              <img src={items[0].imageUrl} alt={items[0].name} className="top-image" />
            )}
          </div>
        )
      )}
      <ul style={ulStyle}>
        {items.slice(1).map((item, index) => (
          <li key={item.id}>
            <span className="item-rank">
              {index + 2}
              .&nbsp;
            </span>
            <span className="item-name">
              {item.name}
            </span>
            &nbsp;&nbsp;
            <span className="item-detail">
              {item.detail}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

TopList.defaultProps = {
  items: [],
  subtitle: '',
  alignment: 'left',
};

TopList.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
      nameUrl: PropTypes.string,
      detailUrl: PropTypes.string,
    }),
  ),
  alignment: PropTypes.oneOf(['left', 'right']),
};
