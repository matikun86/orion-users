import React from 'react';
import { shallow, mount } from 'enzyme';
import assert from 'assert';
import sinon from 'sinon';
import API from './../../src/api';
import { ContactsContainer } from '../../src/components/Contacts/ContactsContainer';
import ContactsView from '../../src/components/Contacts/ContactsView';
// https://github.com/airbnb/enzyme/issues/341
import 'jsdom-global/register';

const mockedContacts = [{
  id: 1,
  name: 'Name 1',
  username: 'username 1',
  email: 'user1@name.com'
}, {
  id: 2,
  name: 'Name 2',
  username: 'username 2',
  email: 'user2@name.com'
}];

describe('Contacts component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {actions:{}, contacts: []};
      const wrapper = shallow(<ContactsContainer {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});


describe('ContactsView', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {
        contacts: mockedContacts,
        onContactClick: sinon.spy()
      };
      const wrapper = shallow(<ContactsView {...props}/>);
      assert.equal(wrapper.length, 1);
    });
    
    it('should show contacts', () => {
      const props = {
        contacts: mockedContacts,
        onContactClick: sinon.spy()
      };
      const wrapper = shallow(<ContactsView {...props}/>);
      assert.equal(wrapper.update().find('table tbody tr').length, mockedContacts.length);
    });

    it('should fire onContactClick on clicking a contact', () => {
      const props = {
        contacts: mockedContacts,
        onContactClick: sinon.spy()
      };
      const wrapper = shallow(<ContactsView {...props}/>);
      wrapper.find('table tbody tr').first().simulate('click');
      assert.ok(props.onContactClick.called);
    });
  });
});
