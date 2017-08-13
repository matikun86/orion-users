import React from 'react';
import { connect } from "react-redux";
import update from 'immutability-helper';
import MapView from './MapView';

export class MapContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      markers: this.getMarkersFromContacts(props.contacts),
      showMarkers: false // We use this to avoid showing markers before map loads.
    };

    this.onMapLoaded = this.onMapLoaded.bind(this);
  }

  componentWillUpdate(props) {
    if(!_.isEqual(this.props.contacts, props.contacts)) {
      this.setState(update(this.state, {
        markers: { $set: this.getMarkersFromContacts(props.contacts) }
      }));
    }
  }

  getMarkersFromContacts(contacts) {
    return _.map(contacts, (contact) => ({
      id: contact.id,
      position: {
        lat: Number(contact.address.geo.lat),
        lng: Number(contact.address.geo.lng)
      },
      name: contact.name
    }));
  }

  onMapLoaded() {
    this.setState(update(this.state, {
      showMarkers: { $set: true }
    }));
  }

  render() {
    return (
      <MapView
        markers={this.state.markers}
        onMapLoaded={this.onMapLoaded}
        showMarkers={this.state.showMarkers} />
    );
  }
}

function mapStateToProps(rootState) {
  return {
    contacts: rootState.contactsReducer.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);