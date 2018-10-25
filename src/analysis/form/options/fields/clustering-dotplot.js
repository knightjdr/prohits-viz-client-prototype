import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import CustomField from '../../field/field';
import DefaultChange from '../../field/default-change';
import DefaultCheckboxChange from '../../field/default-checkbox-change';
import Info from '../info/info';

import './clustering.css';

const Clustering = ({
  analysisType,
  conditionClustering,
  clustering,
  readoutClustering,
}) => (
  <div>
    <div className="Clustering-header">
      Clustering
    </div>
    <div className="Clustering-introduction">
      See the{' '}
      <NavLink
        className="Clustering-introduction-link"
        to="/help/tools/dotplot"
      >
        help
      </NavLink>{' '}
      for clustering options available for this tool.
    </div>
    <CustomField
      label="Clustering type"
      name="clustering"
      onChange={DefaultChange}
      options={[
        { text: 'none', value: 'none' },
        { text: 'Hierarchical', value: 'hierarchical' },
        { text: 'Biclustering', value: 'biclustering' },
      ]}
      placeHolder="Clustering type..."
      type="select"
    />
    {
      clustering === 'biclustering' &&
      <div className="Clustering-biclustering-checkbox">
        <div className="Clustering-biclustering-checkbox-label">
          Approximate biclustering (faster):
        </div>
        <CustomField
          name="biclusteringApprox"
          onChange={DefaultCheckboxChange}
          type="switch"
        />
      </div>
    }
    {
      clustering === 'hierarchical' &&
      <div className="Clustering-hierarchical-container">
        <CustomField
          label="Distance metric"
          name="distance"
          onChange={DefaultChange}
          options={[
            { text: 'binary', value: 'binary' },
            { text: 'Canberra', value: 'canberra' },
            { text: 'Euclidean', value: 'euclidean' },
            { text: 'Jaccard', value: 'jaccard' },
            { text: 'Manhattan', value: 'manhattan' },
            { text: 'maximum', value: 'maximum' },
          ]}
          placeHolder="Distance metric..."
          type="select"
        />
        <CustomField
          label="Clustering method"
          name="clusteringMethod"
          onChange={DefaultChange}
          options={[
            { text: 'average', value: 'average' },
            { text: 'centroid', value: 'centroid' },
            { text: 'complete', value: 'complete' },
            { text: 'McQuitty', value: 'mcquitty' },
            { text: 'median', value: 'median' },
            { text: 'single', value: 'single' },
            { text: 'ward', value: 'ward' },
          ]}
          placeHolder="Clustering method..."
          type="select"
        />
      </div>
    }
    {
      clustering === 'none' &&
      <div className="Clustering-none-container">
        <CustomField
          helpMessage={Info[analysisType].conditionClustering}
          label="Condition options"
          name="conditionClustering"
          onChange={DefaultChange}
          options={[
            { text: 'Supply conditions', value: 'none' },
            { text: 'Cluster all conditions', value: 'conditions' },
          ]}
          placeHolder="Condition options..."
          type="select"
        />
        {
          conditionClustering === 'none' &&
          <CustomField
            label="Conditions"
            name="conditionList"
            onChange={DefaultChange}
            placeHolder="Conditions..."
            type="textArea"
          />
        }
        <CustomField
          helpMessage={Info[analysisType].readoutClustering}
          label="Readout options"
          name="readoutClustering"
          onChange={DefaultChange}
          options={[
            { text: 'Supply readouts', value: 'none' },
            { text: 'Cluster all readouts', value: 'readouts' },
          ]}
          placeHolder="Readout options..."
          type="select"
        />
        {
          readoutClustering === 'none' &&
          <CustomField
            label="Readouts"
            name="readoutList"
            onChange={DefaultChange}
            placeHolder="Readouts..."
            type="textArea"
          />
        }
      </div>
    }
    <div className="Clustering-checkbox">
      <div className="Clustering-checkbox-label">
        Optimize clustering:
      </div>
      <CustomField
        name="clusteringOptimize"
        onChange={DefaultCheckboxChange}
        type="switch"
      />
    </div>
  </div>
);

Clustering.defaultProps = {
  conditionClustering: undefined,
  clustering: undefined,
  readoutClustering: undefined,
};

Clustering.propTypes = {
  analysisType: PropTypes.string.isRequired,
  conditionClustering: PropTypes.string,
  clustering: PropTypes.string,
  readoutClustering: PropTypes.string,
};

export default Clustering;
