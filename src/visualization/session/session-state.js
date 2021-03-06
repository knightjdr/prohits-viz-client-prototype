import { store } from '../../state/store';

const keep = {
  dotplot: [
    'annotations',
    'columns',
    'customize',
    'genes',
    'go',
    'markers',
    'minimap',
    'panel',
    'parameters',
    'position',
    'positionCustomize',
    'rows',
    'save',
    'search',
    'settings',
    'tabs',
    'vizanalysis',
    'vizanalysisform',
  ],
};
keep.heatmap = keep.dotplot;

const sessionState = (name) => {
  const state = store.getState();
  const { imageType } = state.parameters;
  const saveState = Object.entries(state).reduce((accum, [key, value]) => {
    if (keep[imageType].includes(key)) {
      const setting = {};
      setting[key] = value;
      return {
        ...accum,
        ...setting,
      };
    }
    return accum;
  }, {});
  saveState.parameters.date = new Date();
  saveState.parameters.name = name || saveState.parameters.name;
  return saveState;
};

export default sessionState;
