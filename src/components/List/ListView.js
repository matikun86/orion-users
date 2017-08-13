import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './List.scss';

const ListView = (props) => {
  const filterUppercase = props.filter.toUpperCase();

  return (
    <section className="contacts">
      <h4>Contacts</h4>

      <form className="form-inline">
        <div className="form-group">
          <label className="sr-only" htmlFor="exampleInputEmail3">Search</label>
          <input type="search" className="form-control" id="exampleInputEmail3" placeholder="Search" value={props.filter} onChange={props.onFilterChange} />
        </div>
      </form>
      
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

ListView.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onContactClick: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default ListView;