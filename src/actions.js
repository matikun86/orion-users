export const actionTypes = {
  CONTACT_SELECTED: 'CONTACT_SELECTED',
  NO_CONTACT_SELECTED: 'NO_CONTACT_SELECTED'
};

const contactSelected = (contact) => ({ type: actionTypes.CONTACT_SELECTED, contact });
const noContactSelected = () => ({ type: actionTypes.NO_CONTACT_SELECTED });

export default {
  contactSelected: contactSelected,
  noContactSelected: noContactSelected
};