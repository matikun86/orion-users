import React from "react";
import ContactsView from "./ContactsView";
import API from './../../api'

export default class ContactsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

    this.onContactClick = this.onContactClick.bind(this);
  }

  componentDidMount() {
    API.get().then(users => {
      this.setState({ users });
    });
  }

  onContactClick() {
    this.showContactCard();
  }

  showContactCard() {
    alert('card');
  }
  
  render() {
    return (
      <ContactsView
        users={this.state.users}
        onContactClick={this.onContactClick}/>
    );
  }
}
