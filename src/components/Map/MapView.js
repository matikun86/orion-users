import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import GoogleMapReact from 'google-map-react';
import './Map.scss';

const Marker = ({ text }) => <div className="marker">
  <p className="name">{text}</p>
  <img className="icon" src="media/marker.png" title={text} />
</div>;

const MapView = (props) => {
  return (
    <div className="content map">
      <GoogleMapReact
        bootstrapURLKeys={{key: MAP_KEY}}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        onGoogleApiLoaded={props.onMapLoaded}
      >
        {props.showMarkers && _.map(props.markers, (marker) => (
          <Marker
            key={marker.id}
            lat={marker.position.lat}
            lng={marker.position.lng}
            text={marker.name} />
        ))}
      </GoogleMapReact>
    </div>
  );
}

MapView.defaultProps = {
  center: {
    lat: -36.852475424368954, lng: 174.76394653321
  },
  zoom: 1
}

MapView.propTypes = {
  center: PropTypes.object,
  markers: PropTypes.array.isRequired,
  onMapLoaded: PropTypes.func.isRequired,
  showMarkers: PropTypes.bool,
  zoom: PropTypes.number
};

export default MapView;