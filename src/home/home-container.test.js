import React from 'react';
import { shallow } from 'enzyme';

import ConvertIsoDate from '../helpers/convert-iso-date';
import FetchHome from '../state/get/home-actions';
import { HomeContainer } from './home-container';

// mock ConvertIsoDate
jest.mock('../helpers/convert-iso-date');
ConvertIsoDate.mockReturnValue('date');

// mock fetch
jest.mock('../state/get/home-actions');
FetchHome.mockReturnValue();

describe('HomeContainer', () => {
  test('Fetchhome is called on mount', () => {
    const wrapper = shallow(
      <HomeContainer
        fetchHome={FetchHome}
        isLoaded={false}
      />,
    );
    expect(FetchHome).toHaveBeenCalledTimes(1);
    wrapper.instance().getHomeContent();
    expect(FetchHome).toHaveBeenCalledTimes(2);
  });
});