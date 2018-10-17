import React from 'react';
import { shallow } from 'enzyme';

import Tasks from './tasks';

jest.mock('../components/table/table-container');

describe('Tasks', () => {
  describe('with navbar', () => {
    describe('and error', () => {
      let wrapper;

      beforeAll(() => {
        wrapper = shallow(
          <Tasks
            changeFile={jest.fn()}
            closeModal={jest.fn()}
            downloadFolder={jest.fn()}
            error
            isUpdating={false}
            missing={false}
            modalContent="test"
            modalTitle="Test"
            navbar
            openModal={false}
            tasks={[{}]}
            refreshStatus={jest.fn()}
            viewFile={jest.fn()}
          />,
        );
      });

      it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

      it('should show navbar', () => {
        expect(wrapper.find('Connect(NavbarContainer)').length).toBe(1);
      });

      it('should show status component', () => {
        expect(wrapper.find('Status').length).toBe(1);
      });

      it('should not show Table component', () => {
        expect(wrapper.find('Table').length).toBe(0);
      });
    });

    describe('and updating', () => {
      let wrapper;

      beforeAll(() => {
        wrapper = shallow(
          <Tasks
            changeFile={jest.fn()}
            closeModal={jest.fn()}
            downloadFolder={jest.fn()}
            error={false}
            isUpdating
            missing={false}
            modalContent="test"
            modalTitle="Test"
            navbar
            openModal={false}
            tasks={[{}]}
            refreshStatus={jest.fn()}
            viewFile={jest.fn()}
          />,
        );
      });

      it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

      it('should show status component', () => {
        expect(wrapper.find('Status').length).toBe(1);
      });

      it('should not show Table component', () => {
        expect(wrapper.find('Table').length).toBe(0);
      });
    });

    describe('and missing task', () => {
      let wrapper;

      beforeAll(() => {
        wrapper = shallow(
          <Tasks
            changeFile={jest.fn()}
            closeModal={jest.fn()}
            downloadFolder={jest.fn()}
            error={false}
            isUpdating={false}
            missing
            modalContent="test"
            modalTitle="Test"
            navbar
            openModal={false}
            tasks={[{}]}
            refreshStatus={jest.fn()}
            viewFile={jest.fn()}
          />,
        );
      });

      it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

      it('should show status component', () => {
        expect(wrapper.find('Status').length).toBe(1);
      });

      it('should not show Table component', () => {
        expect(wrapper.find('Table').length).toBe(0);
      });
    });

    describe('and no tasks', () => {
      let wrapper;

      beforeAll(() => {
        wrapper = shallow(
          <Tasks
            changeFile={jest.fn()}
            closeModal={jest.fn()}
            downloadFolder={jest.fn()}
            error={false}
            isUpdating={false}
            missing={false}
            modalContent="test"
            modalTitle="Test"
            navbar
            openModal={false}
            tasks={[]}
            refreshStatus={jest.fn()}
            viewFile={jest.fn()}
          />,
        );
      });

      it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

      it('should show status component', () => {
        expect(wrapper.find('Status').length).toBe(1);
      });

      it('should not show Table component', () => {
        expect(wrapper.find('Table').length).toBe(0);
      });
    });

    describe('and tasks and no issues', () => {
      let wrapper;

      beforeAll(() => {
        wrapper = shallow(
          <Tasks
            changeFile={jest.fn()}
            closeModal={jest.fn()}
            downloadFolder={jest.fn()}
            error={false}
            isUpdating={false}
            missing={false}
            modalContent="test"
            modalTitle="Test"
            navbar
            openModal={false}
            tasks={[{ id: 'task1' }]}
            refreshStatus={jest.fn()}
            viewFile={jest.fn()}
          />,
        );
      });

      it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });

      it('should not show status component', () => {
        expect(wrapper.find('Status').length).toBe(0);
      });

      it('should show Table component', () => {
        expect(wrapper.find('Table').length).toBe(1);
      });
    });
  });

  describe('without navbar', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(
        <Tasks
          changeFile={jest.fn()}
          closeModal={jest.fn()}
          downloadFolder={jest.fn()}
          error
          isUpdating={false}
          missing={false}
          modalContent="test"
          modalTitle="Test"
          navbar={false}
          openModal={false}
          tasks={[{}]}
          refreshStatus={jest.fn()}
          viewFile={jest.fn()}
        />,
      );
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should not show navbar', () => {
      expect(wrapper.find('Connect(NavbarContainer)').length).toBe(0);
    });
  });
});
