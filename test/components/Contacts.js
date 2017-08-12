import React from 'react';
import { shallow, mount } from 'enzyme';
import assert from 'assert';
import sinon from 'sinon';
import API from './../../src/api';
import Contacts from '../../src/components/Contacts/index';
// https://github.com/airbnb/enzyme/issues/341
import 'jsdom-global/register';

describe('Contacts component', () => {
  describe('render()', () => {
    let getStub;
    const mockedUsers = [{
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

    // before running each test, stub API
    beforeEach(() => {
      getStub = sinon.stub(API, 'get').returns(Promise.resolve(mockedUsers));
    });

    // after running each test, restore to the original method to
    // prevent "TypeError: Attempted to wrap get which is already wrapped"
    // error when executing subsequent specs.
    afterEach(() => {
      API.get.restore();
    });

    it('should render the component', () => {
      const wrapper = shallow(<Contacts />);
      assert.equal(wrapper.length, 1);
    });

    it('should get a list of users from API', () => {
      sinon.spy(Contacts.prototype, 'componentDidMount');

      const wrapper = mount(<Contacts />);
      assert.ok(getStub.called);
      assert.ok(Contacts.prototype.componentDidMount.calledOnce);
      // Wait for setState to be done.
      setTimeout(() => {
        assert.equal(wrapper.update().find('table tbody tr').length, mockedUsers.length);
      });
    });
  });
});
