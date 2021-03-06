import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Upload } from 'antd';
import { NavLink } from 'react-router-dom';
import { faCog, faFilePlus } from '@fortawesome/pro-solid-svg-icons';

import BrowserSession from '../browser-session/browser-session';

import './visualization__select.css';

const config = {
  name: 'file',
  multiple: false,
  action: '',
  beforeUpload: () => (false),
};

const Selection = ({
  err,
  handleFile,
  loading,
}) => (
  <div className="visualization__select">
    <div
      className="visualization__select-error"
      style={{
        transform: err ? 'scaleY(1)' : 'scaleY(0)',
      }}
    >
      {err}
    </div>
    <Upload
      onChange={handleFile}
      {...config}
    >
      <Button>
        <FontAwesomeIcon className="FileInput-fa-icon" icon={faFilePlus} /> Select File
      </Button>
    </Upload>
    <div
      className="visualization__select-loading"
      style={{
        transform: loading ? 'scaleY(1)' : 'scaleY(0)',
      }}
    >
      <FontAwesomeIcon icon={faCog} spin /> loading...
    </div>
    <div className="visualization__select-instructions">
      Select the image to display interactively. This file must be JSON format
      (extension .json). If you have downloaded an analysis results folder from
      ProHits-viz these files will be located in the &quot;interactive&quot;
      subfolder. See the{' '}
      <NavLink
        className="visualization__select-instructions-link"
        to="/help/visualization/format"
      >
        help
      </NavLink>{' '}
      for information on the input format. If you would like to test a sample file,
      click{' '}
      <NavLink
        className="visualization__select-instructions-link"
        to="/visualization/samplefile/dotplot"
      >
        here
      </NavLink>.
    </div>
    <BrowserSession />
  </div>
);

Selection.defaultProps = {
  err: null,
};

Selection.propTypes = {
  err: PropTypes.string,
  handleFile: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Selection;
