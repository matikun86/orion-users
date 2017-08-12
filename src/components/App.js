import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import actions from './../actions.js'
import Nav from './Nav';
import API from './../api'
import '../stylesheets/main.scss';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadContacts();
  }

  loadContacts() {
    API.get().then(contacts => {
      this.props.actions.contactsUpdated(contacts);
    });
  }
  
  render() {
    return (
      <div className='container'>
        <Nav />
        {this.props.children}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);