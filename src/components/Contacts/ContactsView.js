import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './Contacts.scss';

const ContactsView = (props) => {
  const filterUppercase = props.filter.toUpperCase();

  return (
    <section className="contacts">
      <h4>Contacts</h4>

      <input type="search" placeholder="search" name="routeNumber" value={props.filter} onChange={props.onFilterChange} />
      
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Company Name</th>
            </tr>
          </thead>
          <tbody>
            {_.chain(props.contacts)
              .filter(contact => 
                contact.name.toUpperCase().includes(filterUppercase) ||
                contact.username.toUpperCase().includes(filterUppercase) ||
                contact.email.toUpperCase().includes(filterUppercase) ||
                contact.company.name.toUpperCase().includes(filterUppercase)
              )
              .map((contact, index) =>
                <tr key={index} onClick={() => props.onContactClick(contact) }>
                  <td>{contact.name}</td>
                  <td>{contact.username}</td>
                  <td>{contact.email}</td>
                  <td>{contact.company.name}</td>
                </tr>
              )
              .value()
            }
          </tbody>
        </table>
      </div>
    </section>
  );
};

ContactsView.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onContactClick: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default ContactsView;