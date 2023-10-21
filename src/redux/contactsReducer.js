const INITIAL_STATE = {
  contactsData: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'contacts/addContacts': {
      return {
        ...state,
        contactsData: [...state.contactsData, action.payload],
      };
    }
    case 'contacts/deleteContacts': {
      return {
        ...state,
        contactsData: state.contactsData.filter(
          contactData => contactData.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
