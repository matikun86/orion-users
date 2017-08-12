import React from 'react';
import PropTypes from 'prop-types';
import './Contacts.scss';

const ContactsView = (props) => {
  return (
    <section className="contacts">
      <h4>Contacts</h4>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {props.contacts.map((contact, index) =>
              <tr key={index} onClick={() => props.onContactClick(contact) }>
                <td>{contact.name}</td>
                <td>{contact.username}</td>
                <td>{contact.email}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

ContactsView.propTypes = {
  contacts: PropTypes.array.isRequired,
  onContactClick: PropTypes.func.isRequired
};

export default ContactsView;