import PropTypes from 'prop-types';
import React from 'react';

import Heatmap from './heatmap/panel__settings-heatmap';
import SegCircle from './segcircle/panel__settings-segcircle';

import './panel__settings.css';

const Settings = ({
  changePlot,
  changeSetting,
  imageKind,
  plots,
  resetSettings,
  settings,
  storeSettings,
  updateSetting,
}) => {
  switch (imageKind) {
    case 'segcircle':
      return (
        <SegCircle
          changePlot={changePlot}
          changeSetting={changeSetting}
          plots={plots}
          resetSettings={resetSettings}
          settings={settings}
          storeSettings={storeSettings}
          updateSetting={updateSetting}
        />
      );
    default:
      return (
        <Heatmap
          changeSetting={changeSetting}
          resetSettings={resetSettings}
          settings={settings}
          storeSettings={storeSettings}
          updateSetting={updateSetting}
        />
      );
  }
};

Settings.propTypes = {
  changePlot: PropTypes.func.isRequired,
  changeSetting: PropTypes.func.isRequired,
  imageKind: PropTypes.string.isRequired,
  plots: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  resetSettings: PropTypes.func.isRequired,
  settings: PropTypes.shape({}).isRequired,
  storeSettings: PropTypes.shape({}).isRequired,
  updateSetting: PropTypes.func.isRequired,
};

export default Settings;
