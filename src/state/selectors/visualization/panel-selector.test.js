import panelSelector from './panel-selector';

describe('Panel selector', () => {
  it('should return panel visibility state', () => {
    const state = {
      panel: false,
    };
    expect(panelSelector(state)).toBeFalsy();
  });
});
