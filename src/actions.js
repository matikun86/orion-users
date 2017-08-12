export const actionTypes = {
  CONTACT_SELECTED: 'CONTACT_SELECTED',
  CONTACTS_UPDATED: 'CONTACTS_UPDATED',
  NO_CONTACT_SELECTED: 'NO_CONTACT_SELECTED'
};

const contactSelected = (contact) => ({ type: actionTypes.CONTACT_SELECTED, contact });
const contactsUpdated = (contacts) => ({ type: actionTypes.CONTACTS_UPDATED, contacts });
const noContactSelected = () => ({ type: actionTypes.NO_CONTACT_SELECTED });

export default {
  contactSelected: contactSelected,
  contactsUpdated: contactsUpdated,
  noContactSelected: noContactSelected
};