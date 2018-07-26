import DeepCopy from '../../../helpers/deep-copy';
import RowsReducer from './rows-reducer';
import * as actions from './rows-actions';
import * as fileActions from '../interactive-file-actions';

// import DefaultState from '../../../visualization/test/annotations';
const DefaultState = {
  direction: null,
  id: null,
  list: [],
  order: [],
  sortBy: null,
};

jest.mock('../../../helpers/deep-copy');

describe('Rows set reducer', () => {
  it('should return an empty initial state', () => {
    expect(RowsReducer(undefined, {})).toEqual(DefaultState);
  });

  it('should handle CLEAR_INTERACTIVE_FILE', () => {
    const expectedState = {
      ...DefaultState,
    };
    expect(RowsReducer(undefined, {
      type: fileActions.CLEAR_INTERACTIVE_FILE,
    })).toEqual(expectedState);
  });

  it('should handle PARSE_INTERACTIVE_FILE', () => {
    const list = [
      { data: {}, name: 'a' },
      { data: {}, name: 'b' },
      { data: {}, name: 'c' },
    ];
    DeepCopy.mockReturnValue(list);
    const expectedState = {
      direction: 'asc',
      id: null,
      list,
      order: ['a', 'b', 'c'],
      sortBy: 1,
    };
    expect(RowsReducer(undefined, {
      file: {
        rows: {
          direction: 'asc',
          list,
          order: ['a', 'b', 'c'],
          sortBy: 1,
        },
      },
      type: fileActions.PARSE_INTERACTIVE_FILE,
    })).toEqual(expectedState);
  });

  it('should handle UPDATE_ROWS', () => {
    const list = [
      { data: {}, name: 'a' },
      { data: {}, name: 'b' },
      { data: {}, name: 'c' },
    ];
    DeepCopy.mockReturnValue(list);
    const expectedState = {
      direction: 'asc',
      id: 1,
      list,
      order: [],
      sortBy: 1,
    };
    expect(RowsReducer(undefined, {
      direction: 'asc',
      id: 1,
      list,
      sortBy: 1,
      type: actions.UPDATE_ROWS,
    })).toEqual(expectedState);
  });
});
