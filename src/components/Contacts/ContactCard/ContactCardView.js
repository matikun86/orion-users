import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './ContactsCard.scss';

const ContactsCardView = (props) => {
  if(_.isEmpty(props.contact)) {
    return <section className="contact-card"></section>
  }
  
  return (
    <section className="contact-card show">
      <button type="button" className="close" aria-label="Close" onClick={props.onClose}><span aria-hidden="true">&times;</span></button>
      <div className="card-container">
        <h1 className="contact-name">{props.contact.name}</h1>
        <h3 className="company-name"><i>{props.contact.company.name}</i></h3>
        <section className="contact-details row">
          <div className="company-details col-xs-7">
            <p>{props.contact.company.bs}</p>
            <p>{props.contact.company.catchPhrase}</p>
            <p className="website">http://{props.contact.website}</p>
          </div>
          <div className="personal-details col-xs-5">
            <address>
              <p><span className="glyphicon glyphicon-phone" aria-hidden="true"></span> {props.contact.phone}</p>
              <p><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> {props.contact.email}</p>
            </address>
          </div>
        </section>
      </div>
    </section>
  );
};

ContactsCardView.propTypes = {
  contact: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ContactsCardView;