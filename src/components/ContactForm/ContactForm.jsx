import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addContact } from 'redux/slice';

import {
  ContactsWrapper,
  Title,
  Form,
  Label,
  Input,
  Button,
} from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  //=====================================
  const contactslist = useSelector(state => state.contactslist);

  const dispatch = useDispatch();
  const isContactlreadyExist = ({ name }) => {
    const result = contactslist.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    return !result;
  };

  const contactFormHadler = data => {
    if (isContactlreadyExist(data)) {
      dispatch(addContact(data));
    } else {
      Notify.info(`Contact ${data.name} is already in Your Phonebook`);
    }
  };
  //=====================================
  const onContactFormInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };
  const addContactToList = e => {
    e.preventDefault();
    const id = shortid.generate();
    contactFormHadler({ name, number, id });
    formReset();
  };
  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContactsWrapper>
      <Title>Phonebook</Title>
      <Form onSubmit={addContactToList}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onContactFormInputChange}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onContactFormInputChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </ContactsWrapper>
  );
}
