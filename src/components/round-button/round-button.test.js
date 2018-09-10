import React from 'react';
import { shallow } from 'enzyme';

import RoundButton from './round-button';

jest.mock('@fortawesome/react-fontawesome');

const handleClick = jest.fn();

describe('Round button component', () => {
  describe('with default props', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(
        <RoundButton
          handleClick={handleClick}
          icon={{}}
        />,
      );
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have default class', () => {
      expect(wrapper.hasClass('round-button')).toBeTruthy();
    });

    it('should call click function', () => {
      wrapper.simulate('click');
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('with user props', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(
        <RoundButton
          className="test-class"
          handleClick={handleClick}
          icon={{ name: 'icon' }}
          miscProp="something"
        />,
      );
    });

    it('should have added class', () => {
      expect(wrapper.hasClass('test-class')).toBeTruthy();
    });

    it('should have icon', () => {
      const fa = wrapper.childAt(0);
      expect(fa.props().icon.name).toBe('icon');
    });

    it('should have added prop', () => {
      expect(wrapper.prop('miscProp')).toBe('something');
    });
  });
});
