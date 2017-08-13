import React from 'react';
import { shallow, mount } from 'enzyme';
import assert from 'assert';
import LettersView from '../../src/components/Letters/LettersView';

const mockedGroups = {
  'A': [{
    id: 1,
    name: 'Albert',
    username: 'Al',
    email: 'user1@name.com',
    company: {
      name: 'Company 1'
    }
  }, {
    id: 2,
    name: 'Andrew',
    username: 'An',
    email: 'user2@name.com',
    company: {
      name: 'Company 2'
    }
  }],
  'C': [{
    id: 3,
    name: 'Charles',
    username: 'Ch',
    email: 'user3@name.com',
    company: {
      name: 'Company 2'
    }
  }]
};

describe('LettersView', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = { groups: mockedGroups }
      const wrapper = shallow(<LettersView {...props}/>)

      assert.equal(wrapper.length, 1);
    });
    
    it('should show contacts', () => {
      const props = { groups: mockedGroups }
      const wrapper = shallow(<LettersView {...props}/>)

      assert.equal(wrapper.update().find('ul li').length, Object.keys(mockedGroups).length);
    });
  });
});
