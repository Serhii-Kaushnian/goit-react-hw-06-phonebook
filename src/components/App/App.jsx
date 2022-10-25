import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContacts,
  filterContacts,
} from '../../redux/actions';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { AppWrapper, Wrapper } from './App.styled';

export default function App() {
  const contactslist = useSelector(state => state.contactslist);

  const dispatch = useDispatch();

  const isContactlreadyExist = ({ name }) => {
    const result = contactslist.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    return !result;
  };

  const deleteContact = e => {
    const id = e.currentTarget.id;
    dispatch(deleteContacts(id));
  };
  const contactFormHadler = data => {
    if (isContactlreadyExist(data)) {
      dispatch(addContact(data));
    } else {
      Notify.info(`Contact ${data.name} is already in Your Phonebook`);
    }
  };
  const handleFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };
  const getFilteredContacts = () => {
    if (contactslist.contacts) {
      return contactslist.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(contactslist.filter);
      });
    }
  };

  const filteredContacts = getFilteredContacts();

  return (
    <AppWrapper>
      <Wrapper>
        <ContactForm
          title="Phonebook"
          onFormSubmit={contactFormHadler}
        ></ContactForm>
        <Filter
          filterChange={handleFilter}
          filterValue={contactslist.filter}
        ></Filter>
      </Wrapper>
      <ContactList
        title="Contacts"
        onContactDelete={deleteContact}
        contactsList={filteredContacts}
      ></ContactList>
    </AppWrapper>
  );
}
