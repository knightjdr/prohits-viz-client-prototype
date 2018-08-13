import React from 'react';

import FloatMap from './float-map/float-map-container';
import SidePanel from '../__side-panel/visualization__side-panel-container';
import Svg from './svg/heatmap-svg-container';
import Tabs from '../__tabs/visualization__tabs-container';

import './visualization__heatmap.css';

const Heatmap = () => (
  <div className="visualization__heatmap">
    <Tabs>
      <Svg />
    </Tabs>
    <SidePanel />
    <FloatMap />
  </div>
);

export default Heatmap;
