import React from 'react';
import PropTypes from 'prop-types';
import {
  PieChart,
  Pie,
  Tooltip, Cell, Legend, ResponsiveContainer,
} from 'recharts';

import './PieChart.css';

const COLORS = [
  '#FFD700', // Gold
  '#FF6347', // Tomato
  '#98FB98', // Pale Green
  '#FFC0CB', // Pink
  '#BA55D3', // Medium Orchid
  '#FFFF54', // Light Yellow
  '#FFA07A', // Light Salmon
  '#20B2AA', // Light Sea Green
  '#87CEFA', // Light Sky Blue
  '#FA8072', // Salmon
];

export default function DataPieChart({ data }) {
  // eslint-disable-next-line
  const renderValuePercentage = (value: string) => <span>{value}%</span>;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={125}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip separator=" - " formatter={renderValuePercentage} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

DataPieChart.defaultProps = {
  data: [],
};

DataPieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ),
};
