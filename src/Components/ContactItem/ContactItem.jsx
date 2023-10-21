import { FilterButton } from 'Components/Filter/Filter.styled';
import { ContactItemLi } from './ContactItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactIem = () => {
  const contacts = useSelector(state => state.contacts.contactsData);
  const filter = useSelector(state => state.filter.filterData);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  console.log(filteredContacts);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return filteredContacts.map(({ name, number, id }) => (
    <ContactItemLi key={id}>
      {name} : {number}
      <FilterButton
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </FilterButton>
    </ContactItemLi>
  ));
};
