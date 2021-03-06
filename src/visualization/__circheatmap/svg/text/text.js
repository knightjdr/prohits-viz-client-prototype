import PropTypes from 'prop-types';
import React from 'react';

import './text.css';

const Text = ({
  hoveredText,
  show,
  text,
}) => (
  <g transform="scale(0.95)">
    <filter id="dropshadow" height="130%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
      <feOffset dx="1" dy="2" result="offsetblur" />
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.3" />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    {
      show
      && text.length > 0
      && text.map(details => (
        <text
          className="pie__text"
          fontSize="16px"
          key={details.id}
          transform={`rotate(90 ${details.x} ${details.y})`}
          x={details.x + 2}
          y={details.y}
        >
          {`${details.string}`}
        </text>
      ))
    }
    {
      hoveredText
      && (
        <g
          className="pie__text_hovered"
          key={`hovered-${hoveredText.id}`}
          transform={`rotate(90 ${hoveredText.x} ${hoveredText.y})`}
        >
          <rect
            fill="#fff"
            height="24"
            rx="2"
            ry="2"
            style={{ filter: 'url(#dropshadow)' }}
            x={hoveredText.x}
            y={hoveredText.y - 17}
            width={hoveredText.width}
          />
          <text
            fontSize="16px"
            x={hoveredText.x + 2}
            y={hoveredText.y}
          >
            {`${hoveredText.string}`}
          </text>
        </g>
      )
    }
  </g>
);

Text.defaultProps = {
  hoveredText: null,
  text: [],
};

Text.propTypes = {
  hoveredText: PropTypes.shape({
    id: PropTypes.string,
    string: PropTypes.string,
    width: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  show: PropTypes.bool.isRequired,
  text: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      string: PropTypes.string,
      width: PropTypes.number,
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ),
};

export default Text;
