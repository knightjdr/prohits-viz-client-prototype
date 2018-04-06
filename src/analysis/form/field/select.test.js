import React from 'react';
import { mount } from 'enzyme';

import InfoModal from './info-modal';
import Select from './select';
import TestForm from './__mocks__/form-wrapper';

jest.mock('./info-modal');

const inputOnChange = jest.fn();
const onChange = jest.fn();
const options = [
  { text: 'option1', value: 1 },
  { text: 'option2', value: 2 },
];
const optionsGroup = [
  {
    group: true,
    text: 'group1',
    children: [
      { text: 'option1', value: 1 },
    ],
  },
  { text: 'option2', value: 2 },
];

describe('Select', () => {
  test('Renders with no value and help message', () => {
    const wrapper = mount(
      <TestForm
        input={{
          onChange: inputOnChange,
          value: undefined,
        }}
        meta={{ error: '', touched: false, warning: '' }}
      >
        <Select
          allowClear
          helpMessage="help"
          input={{}}
          label="Label"
          meta={{}}
          name="TestSelect"
          onChange={onChange}
          options={options}
          placeHolder="Select..."
          required
          style={{}}
        />
      </TestForm>,
    );
    expect(wrapper).toMatchSnapshot();
    const select = wrapper.find('Select').first();
    expect(select.props().value).toBeUndefined();
    expect(wrapper.find('svg.CustomField-help').length).toBe(1);
  });

  test('Renders with without help message', () => {
    const wrapper = mount(
      <TestForm
        input={{
          onChange: inputOnChange,
          value: undefined,
        }}
        meta={{ error: '', touched: false, warning: '' }}
      >
        <Select
          allowClear
          input={{}}
          label="Label"
          meta={{}}
          name="TestSelect"
          onChange={onChange}
          options={options}
          placeHolder="Select..."
          required
          style={{}}
        />
      </TestForm>,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('svg.CustomField-help').length).toBe(0);
  });

  test('Modal called on button click', () => {
    const wrapper = mount(
      <TestForm
        input={{
          onChange: inputOnChange,
          value: undefined,
        }}
        meta={{ error: '', touched: false, warning: '' }}
      >
        <Select
          allowClear
          helpMessage="help"
          label="Label"
          input={{}}
          meta={{}}
          name="TestSelect"
          onChange={onChange}
          options={options}
          placeHolder="Select..."
          required
          style={{}}
        />
      </TestForm>,
    );
    jest.clearAllMocks();
    const button = wrapper.find('.CustomField-help').first();
    button.simulate('click');
    expect(InfoModal).toHaveBeenCalledTimes(1);
    expect(InfoModal).toHaveBeenCalledWith('Label', 'help');
  });

  test('Modal called on button click without title text', () => {
    const wrapper = mount(
      <TestForm
        input={{
          onChange: inputOnChange,
          value: undefined,
        }}
        meta={{ error: '', touched: false, warning: '' }}
      >
        <Select
          allowClear
          helpMessage="help"
          input={{}}
          meta={{}}
          name="TestSelect"
          onChange={onChange}
          options={options}
          placeHolder="Select..."
          required
          style={{}}
        />
      </TestForm>,
    );
    jest.clearAllMocks();
    const button = wrapper.find('.CustomField-help').first();
    button.simulate('click');
    expect(InfoModal).toHaveBeenCalledTimes(1);
    expect(InfoModal).toHaveBeenCalledWith('Help', 'help');
  });

  test('Renders with group', () => {
    const wrapper = mount(
      <TestForm
        input={{
          onChange: inputOnChange,
          value: undefined,
        }}
        meta={{ error: '', touched: false, warning: '' }}
      >
        <Select
          allowClear
          input={{}}
          meta={{}}
          name="TestSelect"
          onChange={onChange}
          options={optionsGroup}
          placeHolder="Select..."
          required
          style={{}}
        />
      </TestForm>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('On change called when option changes', () => {
    const wrapper = mount(
      <TestForm
        input={{
          onChange: inputOnChange,
          value: undefined,
        }}
        meta={{ error: '', touched: false, warning: '' }}
      >
        <Select
          allowClear
          input={{}}
          meta={{}}
          name="TestSelect"
          onChange={onChange}
          options={options}
          placeHolder="Select..."
          required
          style={{}}
        />
      </TestForm>,
    );
    const select = wrapper.find('Select').first();
    select.props().onChange();
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('Can be set via input.value', () => {
    const wrapper = mount(
      <TestForm
        input={{
          onChange: inputOnChange,
          value: undefined,
        }}
        meta={{ error: '', touched: false, warning: '' }}
      >
        <Select
          allowClear
          input={{}}
          meta={{}}
          name="TestSelect"
          onChange={onChange}
          options={options}
          placeHolder="Select..."
          required
          style={{}}
        />
      </TestForm>,
    );
    wrapper.setProps({
      input: {
        onChange: inputOnChange,
        value: 1,
      },
    });
    const select = wrapper.find('Select').first();
    expect(select.props().value).toBe(1);
  });

  test('Submit called on button click', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = mount(
      <TestForm
        input={{
          onChange: inputOnChange,
          value: undefined,
        }}
        meta={{ error: '', touched: false, warning: '' }}
        onSubmit={onSubmitSpy}
      >
        <Select
          allowClear
          input={{}}
          meta={{}}
          name="TestSelect"
          onChange={onChange}
          options={options}
          placeHolder="Select..."
          required
          style={{}}
        />
      </TestForm>,
    );
    const button = wrapper.find('button');
    button.simulate('submit');
    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
  });

  test('Submit error adds prop visualization queue', () => {
    const wrapper = mount(
      <TestForm
        input={{
          onChange: inputOnChange,
          value: undefined,
        }}
        meta={{ error: 'Error message', touched: true, warning: '' }}
      >
        <Select
          allowClear
          input={{}}
          meta={{}}
          name="TestSelect"
          onChange={onChange}
          options={options}
          placeHolder="Select..."
          required
          style={{}}
        />
      </TestForm>,
    );
    expect(wrapper).toMatchSnapshot();
    const formItem = wrapper.find('FormItem');
    expect(formItem.props().help).toBe('Error message');
    expect(formItem.props().validateStatus).toBe('error');
  });

  test('Can add custom style', () => {
    const wrapper = mount(
      <TestForm
        input={{
          onChange: inputOnChange,
          value: undefined,
        }}
        meta={{ error: '', touched: false, warning: '' }}
      >
        <Select
          allowClear
          input={{}}
          meta={{}}
          name="TestSelect"
          onChange={onChange}
          options={options}
          placeHolder="Select..."
          required
          style={{ backgroundColor: '#000' }}
        />
      </TestForm>,
    );
    const selectStyle = wrapper.find('Select').first().props().style;
    expect(selectStyle).toHaveProperty('backgroundColor', '#000');
  });
});