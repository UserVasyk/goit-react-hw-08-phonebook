import { ContactForm } from 'components/ContactFrom/ContactFrom';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Title, ContactsBox } from './Contacts.styled';
const Contacts = () => {
  return (
    <ContactsBox>
      <Title>Contacts</Title>
      <ContactForm />
      <Filter />
      <ContactList />
    </ContactsBox>
  );
};
export default Contacts;
