/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList,
} from 'recharts';

import './Histogram.css';

const CustomTooltipContent = ({ payload }) => (
  <div className="custom-tooltip">
    {payload.map((entry, index) => (
      <div key={`tooltip-${index}`}>
        {`${entry.value}`}
      </div>
    ))}
  </div>
);

CustomTooltipContent.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
      color: PropTypes.string,
    })
  ),
};

const Histogram = ({ title, subtitle, data, showValue }) => {
  return (
    <>
      <div className="histogram">
        <h2>{title}</h2>
        {subtitle && <h3 className="subtitle">{subtitle}</h3>}
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart layout="vertical" data={data}>
          <CartesianGrid strokeDasharray="0 1" />
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" hide />
          <Tooltip content={<CustomTooltipContent />} />
          <Bar dataKey="value" radius={10}>
            <LabelList dataKey="name" position="insideLeft" fill="white" />
            {showValue && <LabelList dataKey="value" position="insideRight" fill="white" />}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

Histogram.defaultProps = {
  title: '',
  data: [],
  showValue: false,
};

Histogram.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ),
  showValue: PropTypes.bool,
};

export default Histogram;
