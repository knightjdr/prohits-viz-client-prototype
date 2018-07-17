import React from 'react';
import { shallow } from 'enzyme';

import InfoPanel from './panel__info';

const downloadLegend = jest.fn();

describe('Info panel', () => {
  it('should render', () => {
    const wrapper = shallow(
      <InfoPanel
        downloadLegend={downloadLegend}
        legend={{}}
        params={{}}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call download legend function when button clicked', () => {
    const wrapper = shallow(
      <InfoPanel
        downloadLegend={downloadLegend}
        legend={{}}
        params={{}}
      />,
    );
    wrapper.find('button').simulate('click');
    expect(downloadLegend).toHaveBeenCalledTimes(1);
  });
});