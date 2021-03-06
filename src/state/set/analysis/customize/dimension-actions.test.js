import * as actions from './dimension-actions';

describe('Customi image dimesion set actions', () => {
  it('should dispatch an action to set the image dimensions', () => {
    const expectedAction = {
      columns: 30,
      height: 500,
      pageX: 20,
      pageY: 15,
      rows: 30,
      type: actions.SET_CUSTOMIZE_DIMENSIONS,
      width: 500,
    };
    expect(actions.setDimensions(30, 30, 20, 15, 500, 500)).toEqual(expectedAction);
  });
});
