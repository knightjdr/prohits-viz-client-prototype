import React from 'react';
import ShortID from 'shortid';
import { shallow } from 'enzyme';

import Annotations from './panel__map-annotations';

jest.mock('shortid');
ShortID.mockReturnValueOnce('a')
  .mockReturnValueOnce('b')
  .mockReturnValueOnce('c')
  .mockReturnValueOnce('d');

const annotations = {
  color: '#0000ff',
  list: [
    { text: 'a', x: 0.1, y: 0.2 },
    { text: 'b', x: 0.2, y: 0.4 },
  ],
};

describe('Map panel annotations', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Annotations annotations={annotations} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
