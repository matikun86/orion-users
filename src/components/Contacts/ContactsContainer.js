import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import actions from './../../actions.js'
import ContactsView from "./ContactsView";
import ContactCard from "./ContactCard";
import update from 'immutability-helper';

export class ContactsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      filter: props.filter || ''
    };

    this.onContactClick = this.onContactClick.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
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
      <div className="content contacts">
        <ContactsView
          contacts={this.props.contacts}
          filter={this.state.filter}
          onContactClick={this.onContactClick}
          onFilterChange={this.onFilterChange} />

        <ContactCard />
      </div>
    );
  }
}

function mapStateToProps(rootState) {
  return {
    contacts: rootState.contactsReducer.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);