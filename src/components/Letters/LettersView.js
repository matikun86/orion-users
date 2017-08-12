import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// import './Contacts.scss';

const LettersView = (props) => {
  var groups = [];
  _.forIn(props.groups, (group, letter) => {
    groups.push(<li key={letter}><p><strong>{letter}:</strong> ({group.length}) {group.join(', ')}</p></li>);
  });

  return (
    <section className="letters">
      <h4>Letters</h4>

      <ul className="table-responsive">
        {groups}
      </ul>
    </section>
  );
};

LettersView.propTypes = {
  groups: PropTypes.object.isRequired
};

export default LettersView;