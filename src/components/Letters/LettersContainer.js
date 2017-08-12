import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import actions from './../../actions.js'
import update from 'immutability-helper';
import LettersView from './LettersView';

export class LettersContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      groups: this.getContactsGroupByLetter(props.contacts)
    };
  }

  componentWillUpdate(props) {
    if(!_.isEqual(this.props.contacts, props.contacts)) {
      this.setState(update(this.state, {
        groups: { $set: this.getContactsGroupByLetter(props.contacts) }
      }));
    }
  }

  getContactsGroupByLetter(contacts) {
    return _.chain(contacts)
     .map('name')
     .sort()
     .groupBy('[0]')
     .value();
  }

  render() {
    return (
      <LettersView groups={this.state.groups} />
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

export default connect(mapStateToProps, mapDispatchToProps)(LettersContainer);