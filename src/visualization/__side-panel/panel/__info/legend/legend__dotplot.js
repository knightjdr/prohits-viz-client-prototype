import React from 'react';

import ScoreEntities from './legend__score-entities';

const DotplotLegend = (params) => {
  const numColors = params.gradientFill.length;
  const halfColorIndex = Math.floor(numColors / 2);
  const quarterColorIndex = Math.floor(numColors / 4);
  return (
    <svg
      id="legend"
      xmlns="http://www.w3.org/2000/svg"
      height="250"
      width="200"
      viewBox="0 0 200 250"
    >
      <defs>
        <linearGradient id="legendGradient">
          <stop offset="0%" stopColor={params.gradientFill[0]} />
          <stop offset="50%" stopColor={params.gradientFill[halfColorIndex]} />
          <stop offset="100%" stopColor={params.gradientFill[numColors - 1]} />
        </linearGradient>
      </defs>
      <g>
        <text x="100" y="20" textAnchor="middle">
          {params.abundanceName}
        </text>
        <rect x="25" y="30" height="20" width="150" fill="url('#legendGradient')" />
        <text x="25" y="65" textAnchor="middle">
          {params.minAbundance}
        </text>
        <text x="175" y="65" textAnchor="middle">
          {params.abundanceCap}
        </text>
      </g>
      <g>
        <circle fill={params.gradientFill[numColors - 1]} cy="100" cx="60" r="6" />
        <circle fill={params.gradientFill[numColors - 1]} cy="100" cx="135" r="12" />
        <line fill="none" stroke="#000000" strokeWidth="1" x1="70" y1="100" x2="119" y2="100" />
        <polygon fill="#000000" points="110,96 112,100 110,104 119,100" />
        <text y="130" x="100" fontSize="12" textAnchor="middle">
          Relative abundance
        </text>
      </g>
      <g>
        <text y="230" x="100" textAnchor="middle">
          {params.scoreName}
        </text>
        <circle
          cx="50"
          cy="175"
          fill="none"
          r="12"
          stroke={params.gradientEdge[numColors - 1]}
          strokeWidth="2"
        />
        <text y="205" x="50" textAnchor="middle">
          {ScoreEntities[params.scoreType].primary} {params.primaryFilter}
        </text>
        <circle
          cx="100"
          cy="175"
          fill="none"
          r="12"
          stroke={params.gradientEdge[halfColorIndex]}
          strokeWidth="2"
        />
        <text y="205" x="100" textAnchor="middle">
          {ScoreEntities[params.scoreType].secondary} {params.secondaryFilter}
        </text>
        <circle
          fill="none"
          cx="150"
          cy="175"
          r="12"
          stroke={params.gradientEdge[quarterColorIndex]}
          strokeWidth="2"
        />
        <text y="205" x="150" textAnchor="middle">
          {ScoreEntities[params.scoreType].other} {params.secondaryFilter}
        </text>
      </g>
    </svg>
  );
};
export default DotplotLegend;
