import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import sinon from 'sinon';
import _ from 'lodash';
import { ListContainer } from '../../src/components/List/ListContainer';
import ListView from '../../src/components/List/ListView';

const mockedContacts = [{
  id: 1,
  name: 'Name 1',
  username: 'username 1',
  email: 'user1@name.com',
  company: {
    name: 'Company 1'
  }
}, {
  id: 2,
  name: 'Name 2',
  username: 'username 2',
  email: 'user2@name.com',
  company: {
    name: 'Company 2'
  }
}, {
  id: 3,
  name: 'Jhon',
  username: 'J',
  email: 'jhon@name.com',
  company: {
    name: 'Company John'
  }
}];

const noop = () => {};
const shallowListView = (customProps = {}) => {
  const defaultProps = {
    contacts: mockedContacts,
    filter: '',
    onContactClick: noop,
    onFilterChange: noop
  };
  const props = _.defaults(customProps, defaultProps);
  return shallow(<ListView {...props}/>);
}

describe('List component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {actions:{}, contacts: []};
      const wrapper = shallow(<ListContainer {...props}/>);

      assert.equal(wrapper.length, 1);
    });
  });
});

describe('ListView', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallowListView();

      assert.equal(wrapper.length, 1);
    });
    
    it('should show contacts', () => {
      const wrapper = shallowListView();

      assert.equal(wrapper.update().find('table tbody tr').length, mockedContacts.length);
    });

    it('should fire onContactClick on clicking a contact', () => {
      const props = {
        onContactClick: sinon.spy()
      };
      const wrapper = shallowListView(props);
      wrapper.find('table tbody tr').first().simulate('click');

      assert.ok(props.onContactClick.called);
    });

    it('should filter results by input value', () => {
      const wrapper = shallowListView({
        filter: 'Joh'
      });
      const $inputSearch = wrapper.find('input[type="search"]');

      const results = wrapper.update().find('table tbody tr').length;

      assert.notEqual(results, mockedContacts.length);
      assert.ok(results < mockedContacts.length);
    });
  });
});
