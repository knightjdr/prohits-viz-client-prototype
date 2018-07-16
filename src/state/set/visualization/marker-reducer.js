import DeepCopy from '../../../helpers/deep-copy';

import {
  ADD_MARKER,
  CLEAR_ALL_MARKERS,
  CLEAR_LAST_MARKER,
  SET_MARKER_COLOR,
  TOGGLE_RECORD_MARKER,
} from './marker-actions';

// import DefaultState from '../../../visualization/test/markers';

const Markers = (state = {
  color: '#000000',
  list: [],
  record: false,
}, action) => {
  let newList;
  switch (action.type) {
    case ADD_MARKER:
      return {
        ...state,
        list: [
          ...DeepCopy(state.list),
          {
            height: action.height,
            width: action.width,
            x: action.x,
            y: action.y,
          },
        ],
      };
    case CLEAR_ALL_MARKERS:
      return {
        ...state,
        list: [],
      };
    case CLEAR_LAST_MARKER:
      newList = DeepCopy(state.list);
      newList.pop();
      return {
        ...state,
        list: newList,
      };
    case SET_MARKER_COLOR:
      return {
        ...state,
        ...{
          color: action.color,
        },
      };
    case TOGGLE_RECORD_MARKER:
      return {
        ...state,
        ...{
          record: !state.record,
        },
      };
    default:
      return state;
  }
};
export default Markers;
