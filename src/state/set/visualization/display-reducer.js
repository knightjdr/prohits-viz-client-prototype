import * as actions from './display-actions';

export const defaultState = {
  floatMapRight: 10,
  floatMapTop: 10,
  plotFixed: false,
  plotTranslate: 0,
  selectionBox: true,
  tab: 'info',
  tooltips: false,
};

const display = (state = { ...defaultState }, action) => {
  switch (action.type) {
    case actions.CHANGE_PANEL_TAB:
      return {
        ...state,
        tab: action.tab,
      };
    case actions.RESET_MAP_POSITION:
      return {
        ...state,
        floatMapRight: 10,
        floatMapTop: 10,
      };
    case actions.TOGGLE_SELECTION_BOX:
      return {
        ...state,
        selectionBox: !state.selectionBox,
        tooltips: state.selectionBox,
      };
    case actions.TOGGLE_TOOLTIPS:
      return {
        ...state,
        selectionBox: state.tooltips,
        tooltips: !state.tooltips,
      };
    case actions.UPDATE_MAP_POSITION:
      return {
        ...state,
        floatMapRight: action.right,
        floatMapTop: action.top,
      };
    case actions.UPDATE_PLOT_POSITION:
      return {
        ...state,
        plotFixed: action.fixed,
        plotTranslate: action.translate,
      };
    default:
      return state;
  }
};

export default display;
