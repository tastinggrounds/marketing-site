import React from 'react';
import PropTypes from 'prop-types';

import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line,
} from 'recharts';

export default function Histogram({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="0 1" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
        <Line type="monotone" dataKey="value" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

Histogram.defaultProps = {
  data: [],
};

Histogram.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ),
};
