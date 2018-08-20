import PropTypes from 'prop-types';
import React from 'react';
import { Select } from 'antd';

import Options from './options/options';

import './analysis-options.css';

const { Option } = Select;

const AnalysisOptions = ({
  handleType,
  performAnalysis,
  type,
}) => (
  <div className="analysis-options">
    <div className="panel__title">
      Analysis
    </div>
    <div>
      <Select
        allowClear
        className="analysis-options__type-select"
        onChange={handleType}
        placeholder="Analysis type..."
        value={type}
      >
        <Option value="customize">customize image</Option>
        <Option value="domain">domain</Option>
        <Option value="go">GO enrichment</Option>
        <Option value="network">network</Option>
      </Select>
      {
        type &&
        <button
          className="analysis-options__button"
          onClick={performAnalysis}
          type="button"
        >
          Submit
        </button>
      }
    </div>
    {Options[type]}
  </div>
);

AnalysisOptions.defaultProps = {
  type: undefined,
};

AnalysisOptions.propTypes = {
  handleType: PropTypes.func.isRequired,
  performAnalysis: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default AnalysisOptions;
