import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// reducers
import annotations from './set/visualization/annotation-reducer';
import availablePlots from './set/visualization/available-plots-reducer';
import columns from './set/visualization/columns-reducer';
import customize from './set/analysis/customize/data-reducer';
import dimensions from './set/visualization/dimension-reducer';
import dimensionsCustomize from './set/analysis/customize/dimension-reducer';
import display from './set/visualization/display-reducer';
import displayCustomize from './set/analysis/customize/display-reducer';
import formStep from './set/form/form-step-reducer';
import genes from './set/visualization/genes-reducer';
import go from './set/analysis/go-reducer';
import header from './set/form/header-reducer';
import home from './get/home-reducer';
import markers from './set/visualization/marker-reducer';
import minimap from './set/visualization/map-reducer';
import news from './get/news-reducer';
import newsItem from './get/news-item-reducer';
import newsPage from './set/news-page-reducer';
import panel from './set/visualization/panel-reducer';
import parameters from './set/visualization/params-reducer';
import plot from './set/visualization/plot-reducer';
import position from './set/visualization/position-reducer';
import positionCustomize from './set/analysis/customize/position-reducer';
import rows from './set/visualization/rows-reducer';
import save from './set/visualization/save-reducer';
import search from './set/visualization/search-reducer';
import circHeatmapSettings from './set/visualization/circ-heatmap-settings-reducer';
import session from './set/session-reducer';
import settings from './set/visualization/settings-reducer';
import tabs from './set/visualization/tab-reducer';
import tasks from './set/task-reducer';
import vizanalysis from './set/analysis/viz-analysis-reducer';
import vizanalysisform from './set/analysis/viz-analysis-form-reducer';

const Reducers = combineReducers({
  annotations,
  availablePlots,
  columns,
  customize,
  dimensions,
  dimensionsCustomize,
  display,
  displayCustomize,
  form: formReducer,
  formStep,
  genes,
  go,
  header,
  home,
  markers,
  minimap,
  news,
  newsItem,
  newsPage,
  panel,
  parameters,
  plot,
  position,
  positionCustomize,
  rows,
  save,
  search,
  circHeatmapSettings,
  session,
  settings,
  tabs,
  tasks,
  vizanalysis,
  vizanalysisform,
});
export default Reducers;
