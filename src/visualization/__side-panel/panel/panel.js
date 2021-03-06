import React from 'react';

import Analysis from './__analysis/panel__analysis';
import Annotation from './__annotation/panel__annotation-container';
import IndexDB from '../../browser-storage/indexeddb-container';
import Info from './__info/panel__info-container';
import MapWrapper from './__map/panel__map-container';
import Map from './__map/panel__map';
import Save from './__save/panel__save-container';
import Settings from './__settings/panel__settings-container';

import './panel.css';


const Panel = {
  analysis: <Analysis />,
  annotation: <Annotation />,
  info: <Info />,
  map: <MapWrapper render={props => <Map {...props} />} />,
  save: <IndexDB render={props => <Save {...props} />} />,
  settings: <Settings />,
};

export default Panel;
