import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/Contacts/operations';
import { getContacts } from 'redux/Contacts/selectors';
import { List, ButtonDelete } from './ContactList.styled';

export const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <List>
      {filterContacts().map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <ButtonDelete
            onClick={() => dispatch(deleteContact(id))}
            type="button"
          >
            Delete
          </ButtonDelete>
        </li>
      ))}
    </List>
  );
};
