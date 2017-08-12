import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import actions from './../../actions.js'
import API from './../../api'
import ContactsView from "./ContactsView";
import ContactCard from "./ContactCard";

export class ContactsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts: props.contacts || []
    };

    this.onContactClick = this.onContactClick.bind(this);
  }

  componentDidMount() {
    API.get().then(contacts => {
      this.setState({ contacts });
    });
  }

  onContactClick(contact) {
    console.log('clicked');
    this.props.actions.contactSelected(contact)
  }
  
  render() {
    return (
      <div className="contacts">
        <ContactsView
          contacts={this.state.contacts}
          onContactClick={this.onContactClick} />

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