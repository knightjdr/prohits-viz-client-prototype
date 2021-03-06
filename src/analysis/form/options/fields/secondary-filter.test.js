import React from 'react';
import { shallow } from 'enzyme';

import SecondaryFilter from './secondary-filter';

describe('SecondaryFilter', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <SecondaryFilter
        analysisType="dotplot"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
