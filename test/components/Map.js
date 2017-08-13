import React from 'react';
import { shallow, mount } from 'enzyme';
import assert from 'assert';
import MapView from '../../src/components/Map/MapView';

const mockedMarkers = [{
  id: 1,
  name: 'Albert',
  position: {
    lat: -37.123,
    lng: 77.123
  }
}, {
  id: 2,
  name: 'Andrew',
  position: {
    lat: -38.123,
    lng: 78.123
  }
}, {
  id: 3,
  name: 'Charles',
  position: {
    lat: -37.123,
    lng: 76.123
  }
}];

global.MAP_KEY = 'AIzaSyBDEeNQITFwEvw4zEof9DOMEkd1CZ02BUU';

describe('MapView', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {
        markers: mockedMarkers,
        onMapLoaded: () => {},
        showMarkers: true
      };
      const wrapper = shallow(<MapView {...props}/>)

      assert.equal(wrapper.length, 1);
    });
    
    it('should show markers', () => {
      const props = {
        markers: mockedMarkers,
        onMapLoaded: () => {},
        showMarkers: true
      };
      const wrapper = shallow(<MapView {...props}/>)

      assert.equal(wrapper.update().find('Marker').length, mockedMarkers.length);
    });
    
    it('should not show markers if showMarkers is false', () => {
      const props = {
        markers: mockedMarkers,
        onMapLoaded: () => {},
        showMarkers: false
      };
      const wrapper = shallow(<MapView {...props}/>)

      assert.equal(wrapper.update().find('Marker').length, 0);
    });
  });
});
