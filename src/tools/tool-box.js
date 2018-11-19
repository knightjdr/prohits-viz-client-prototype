import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import ScrollTop from '../helpers/scroll-top';

import './tool-box.css';

export const getImageElement = image => (
  typeof image === 'object' ?
    image
    :
    (
      <img
        alt="Toolbox"
        src={image}
      />
    )
);

const ToolBox = ({
  external,
  image,
  route,
  text,
  title,
}) => {
  const imageElement = getImageElement(image);
  const linkContent = (
    <div className="ToolBox-container">
      <div className="ToolBox-title">
        { title }
      </div>
      <div className="toolbox__details">
        <div className="ToolBox-text">
          { text }
        </div>
        <div className="ToolBox-image">
          { imageElement }
        </div>
      </div>
    </div>
  );
  return (
    <button
      className="toolbox__button"
      onClick={ScrollTop}
    >
      {
        external ?
          <a href={route}>
            {linkContent}
          </a>
          :
          <NavLink
            to={route}
          >
            {linkContent}
          </NavLink>
      }
    </button>
  );
};

ToolBox.defaultProps = {
  external: false,
};

ToolBox.propTypes = {
  external: PropTypes.bool,
  image: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ToolBox;
