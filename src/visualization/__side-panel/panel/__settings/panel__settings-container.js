import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { resetSettings, updateSetting } from '../../../../state/set/visualization/settings-actions';
import Settings from './panel__settings';
import SettingSelector from '../../../../state/selectors/visualization/settings-selector';

export class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Store input settings (not necessarily insync with store).
      settings: {
        abundanceCap: this.props.abundanceCap,
        cellSize: this.props.cellSize,
        edgeColor: this.props.edgeColor,
        fillColor: this.props.fillColor,
        imageType: this.props.imageType,
        invertColor: this.props.invertColor,
        minAbundance: this.props.minAbundance,
        primaryFilter: this.props.primaryFilter,
        secondaryFilter: this.props.secondaryFilter,
      },
      // Store settings. Use this to determine in UI if state matches store.
      storeSettings: {
        abundanceCap: this.props.abundanceCap,
        cellSize: this.props.cellSize,
        edgeColor: this.props.edgeColor,
        fillColor: this.props.fillColor,
        imageType: this.props.imageType,
        invertColor: this.props.invertColor,
        minAbundance: this.props.minAbundance,
        primaryFilter: this.props.primaryFilter,
        secondaryFilter: this.props.secondaryFilter,
      },
    };
  }
  componentWillReceiveProps = (nextProps) => {
    if (nextProps.reset) {
      this.restoreAllSettings(nextProps);
    } else {
      this.restoreStoreSettings(nextProps);
    }
  }
  changeSetting = (setting, value) => {
    const newState = {};
    newState[setting] = value;
    this.setState(({ settings }) => ({
      settings: {
        ...settings,
        ...newState,
      },
    }));
  }
  restoreAllSettings = (nextProps) => {
    // Find settings that have changed.
    const updateSettings = Object.keys(this.state.settings).filter(prop => (
      this.state.settings[prop] !== nextProps[prop]
    ));
    // Find store settings that have changed.
    const updateStoreSettings = Object.keys(this.state.storeSettings).filter(prop => (
      this.state.storeSettings[prop] !== nextProps[prop]
    ));
    // Create object of new changes and merge with state.
    const newSettings = updateSettings.reduce(((obj, setting) => {
      const newPair = {};
      newPair[setting] = nextProps[setting];
      return { ...obj, ...newPair };
    }), {});
    const newStoreSettings = updateStoreSettings.reduce(((obj, setting) => {
      const newPair = {};
      newPair[setting] = nextProps[setting];
      return { ...obj, ...newPair };
    }), {});
    this.setState(({ settings, storeSettings }) => ({
      settings: {
        ...settings,
        ...newSettings,
      },
      storeSettings: {
        ...storeSettings,
        ...newStoreSettings,
      },
    }));
  }
  restoreStoreSettings = (nextProps) => {
    // Find store settings that have changed.
    const updateStoreSettings = Object.keys(this.state.storeSettings).filter(prop => (
      this.state.storeSettings[prop] !== nextProps[prop]
    ));
    // If settings have changed, create object of new changes and merge with state.
    if (updateStoreSettings.length > 0) {
      const newSettings = updateStoreSettings.reduce(((obj, setting) => {
        const newPair = {};
        newPair[setting] = nextProps[setting];
        return { ...obj, ...newPair };
      }), {});
      this.setState(({ storeSettings }) => ({
        storeSettings: {
          ...storeSettings,
          ...newSettings,
        },
      }));
    }
  }
  updateSetting = (setting) => {
    this.props.updateSetting(setting, this.state.settings[setting]);
  }
  render() {
    return (
      <Settings
        changeSetting={this.changeSetting}
        settings={this.state.settings}
        resetSettings={this.props.resetSettings}
        storeSettings={this.state.storeSettings}
        updateSetting={this.updateSetting}
      />
    );
  }
}

SettingsContainer.propTypes = {
  abundanceCap: PropTypes.number.isRequired,
  cellSize: PropTypes.number.isRequired,
  edgeColor: PropTypes.string.isRequired,
  fillColor: PropTypes.string.isRequired,
  imageType: PropTypes.string.isRequired,
  invertColor: PropTypes.bool.isRequired,
  minAbundance: PropTypes.number.isRequired,
  primaryFilter: PropTypes.number.isRequired,
  reset: PropTypes.bool.isRequired,
  resetSettings: PropTypes.func.isRequired,
  secondaryFilter: PropTypes.number.isRequired,
  updateSetting: PropTypes.func.isRequired,
};

/* istanbul ignore next */
const mapStateToProps = state => ({
  abundanceCap: SettingSelector(state, 'abundanceCap'),
  cellSize: SettingSelector(state, 'cellSize'),
  edgeColor: SettingSelector(state, 'edgeColor'),
  fillColor: SettingSelector(state, 'fillColor'),
  imageType: SettingSelector(state, 'imageType'),
  invertColor: SettingSelector(state, 'invertColor'),
  minAbundance: SettingSelector(state, 'minAbundance'),
  primaryFilter: SettingSelector(state, 'primaryFilter'),
  reset: SettingSelector(state, 'reset'),
  secondaryFilter: SettingSelector(state, 'secondaryFilter'),
});

const mapDispatchToProps = dispatch => ({
  resetSettings: () => {
    dispatch(resetSettings());
  },
  updateSetting: (setting, value) => {
    dispatch(updateSetting(setting, value));
  },
});

const ConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsContainer);

export default ConnectedContainer;
