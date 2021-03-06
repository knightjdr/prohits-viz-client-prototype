import PropTypes from 'prop-types';
import React from 'react';

import ClickOutside from '../click-outside/click-outside';

import './context-menu.css';

const ContextMenu = ({
  children,
  closeMenu,
  height,
  left,
  setRef,
  show,
  top,
}) => (
  <ClickOutside callback={show ? closeMenu : null}>
    <div
      className="context-menu"
      style={{
        height,
        left,
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'auto' : 'none',
        top,
        visibility: show ? 'visible' : 'hidden',
      }}
    >
      <div
        className="context-menu__inner"
        ref={setRef}
      >
        { children }
      </div>
    </div>
  </ClickOutside>
);

ContextMenu.defaultProps = {
  children: null,
};

ContextMenu.propTypes = {
  children: PropTypes.shape({}),
  closeMenu: PropTypes.func.isRequired,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  left: PropTypes.number.isRequired,
  setRef: PropTypes.shape({}).isRequired,
  show: PropTypes.bool.isRequired,
  top: PropTypes.number.isRequired,
};

export default ContextMenu;
