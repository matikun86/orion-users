import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import _ from 'lodash';
import actions from './../../../actions.js'
import ContactCardView from "./ContactCardView";

export class ContactCardContainer extends React.Component {

  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
  }

  onClose(contact) {
    this.props.actions.noContactSelected();
  }

  render() {
    return (
      <ContactCardView
        contact={this.props.contact}
        onClose={this.onClose} />
    );
  }
}

function mapStateToProps(rootState) {
  return {
    contact: rootState.contactsReducer.contactSelected || {},
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactCardContainer);