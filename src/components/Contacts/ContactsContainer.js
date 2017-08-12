import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import actions from './../../actions.js'
import API from './../../api'
import ContactsView from "./ContactsView";
import ContactCard from "./ContactCard";
import update from 'immutability-helper';

export class ContactsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts: props.contacts || [],
      filter: props.filter || ''
    };

    this.onContactClick = this.onContactClick.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  componentDidMount() {
    API.get().then(contacts => {
      this.setState(update(this.state, {
        contacts: { $set: contacts }
      }));
    });
  }

  onContactClick(contact) {
    this.props.actions.contactSelected(contact)
  }

  onFilterChange(event) {
    this.setState(update(this.state, {
      filter: { $set: event.target.value}
    }));
  }
  
  render() {
    return (
      <div className="contacts">
        <ContactsView
          contacts={this.state.contacts}
          filter={this.state.filter}
          onContactClick={this.onContactClick}
          onFilterChange={this.onFilterChange} />

        <ContactCard />
      </div>
    );
  }
}

function mapStateToProps(rootState) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);