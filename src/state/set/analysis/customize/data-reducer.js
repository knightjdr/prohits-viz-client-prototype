import * as actions from './data-actions';
import * as columnActions from './columns-actions';
import * as fileActions from '../../interactive-file-actions';
import * as rowActions from './rows-actions';
import * as tabActions from '../../visualization/tab-actions';

import deepCopy from '../../../../helpers/deep-copy';

export const defaultState = [];

const data = (state = defaultState, action) => {
  const id = state.length > 0 ? state[state.length - 1].id + 1 : 0;
  switch (action.type) {
    case actions.ADD_CUSTOMIZE_STATE:
      return [
        ...state,
        {
          columns: {
            names: [...action.columns.names],
            ref: action.columns.ref,
          },
          direction: action.direction,
          id,
          removeEmpty: action.removeEmpty,
          resetMaximums: action.resetMaximums,
          rows: {
            list: deepCopy(action.rows.list),
            order: [...action.rows.order],
          },
          sortBy: action.sortBy,
        },
      ];
    case fileActions.CLEAR_INTERACTIVE_FILE:
      return [];
    case fileActions.PARSE_INTERACTIVE_FILE:
      return action.file.customize
        ? deepCopy(action.file.customize)
        : [...defaultState];
    case tabActions.REMOVE_TAB:
      if (action.tab === 'customize') {
        return [];
      }
      return state;
    case actions.REPLACE_CUSTOMIZE_STATE:
      return [
        ...state.slice(0, -1),
        {
          columns: {
            names: [...action.columns.names],
            ref: action.columns.ref,
          },
          direction: action.direction,
          id,
          removeEmpty: action.removeEmpty,
          resetMaximums: action.resetMaximums,
          rows: {
            list: deepCopy(action.rows.list),
            order: [...action.rows.order],
          },
          sortBy: action.sortBy,
        },
      ];
    case actions.RESET_CUSTOMIZE_STATE:
      return [
        state[0],
      ];
    case columnActions.SET_CUSTOMIZE_REFERENCE:
      return [
        ...state.slice(0, -1),
        {
          ...state[state.length - 1],
          columns: {
            names: [...state[state.length - 1].columns.names],
            ref: action.ref,
          },
        },
      ];
    case actions.SET_CUSTOMIZE_STATE:
      return [{
        columns: {
          names: [...action.columns],
          ref: null,
        },
        id,
        removeEmpty: action.removeEmpty,
        resetMaximums: action.resetMaximums,
        rows: {
          list: deepCopy(action.rows.list),
          order: [...action.rows.order],
        },
      }];
    case rowActions.SORT_CUSTOMIZE_STATE:
      /* This is identical to ADD_CUSTOMIZE_STATE but we need a
      ** distinct action when sorting to update the plot position. */
      return [
        ...state,
        {
          columns: {
            names: [...action.columns],
            ref: action.ref,
          },
          direction: action.direction,
          id,
          removeEmpty: action.removeEmpty,
          resetMaximums: action.resetMaximums,
          rows: {
            list: deepCopy(action.rows.list),
            order: [...action.rows.order],
          },
          sortBy: action.sortBy,
        },
      ];
    case actions.UNDO_CUSTOMIZE_STATE:
      return state.slice(0, -1);
    default:
      return state;
  }
};

export default data;
