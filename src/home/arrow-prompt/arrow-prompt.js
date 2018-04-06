import PropTypes from 'prop-types';
import React from 'react';

import './arrow-prompt.css';

const ArrowPrompt = ({
  hide,
}) => (
  <div
    className="ArrowPrompt-down-prompt-container"
    style={{
      opacity: hide ? 0 : 1,
    }}
  >
    <div className="ArrowPrompt-down-prompt">
      <div className="ArrowPrompt-down-text-arrow-container">
        <div className="ArrowPrompt-down-text">
          Getting started
        </div>
        <div className="ArrowPrompt-container">
          <div className="ArrowPrompt-circle ArrowPrompt-circle-top" />
          <div className="ArrowPrompt-circle" />
          <div className="ArrowPrompt-circle ArrowPrompt-circle-bottom" />
          <svg
            className="ArrowPrompt-svg"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 612 612"
            style={{ enableBackground: 'new 0 0 612 612' }}
          >
            <defs>
              <clipPath id="cut-off-arrow">
                <circle cx="306" cy="306" r="287" />
              </clipPath>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
            <path
              className="ArrowPrompt-st-arrow"
              d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0
              l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0
              c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9
              c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

ArrowPrompt.propTypes = {
  hide: PropTypes.bool.isRequired,
};

export default ArrowPrompt;
