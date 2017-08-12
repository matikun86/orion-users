import { actionTypes } from './../actions';
import update from 'immutability-helper';

const initialState = {
  contacts: [],
  contactSelected: {}
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CONTACT_SELECTED:
      return update(state, {
        contactSelected: {$set: action.contact}
      });

    case actionTypes.CONTACTS_UPDATED:
      return update(state, {
        contacts: {$set: action.contacts}
      });

    case actionTypes.NO_CONTACT_SELECTED:
      return update(state, {
        contactSelected: {$set: {}}
      });

    default:
      return state;
  }
};

export default contactsReducer;