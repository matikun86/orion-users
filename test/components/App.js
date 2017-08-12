import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import API from './../../src/api';
import sinon from 'sinon';
import { App } from "../../src/components/App";

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

describe('App component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {
        actions: {
          contactsUpdated: () => {}
        }
      };
      const wrapper = shallow(<App {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
