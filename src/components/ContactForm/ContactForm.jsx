import { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {
  ContactsWrapper,
  Title,
  Form,
  Label,
  Input,
  Button,
} from './ContactForm.styled';

export default function ContactForm({ title, onFormSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
  const addContact = e => {
    e.preventDefault();
    const id = shortid.generate();
    onFormSubmit({ name, number, id });
    formReset();
  };
  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContactsWrapper>
      <Title>{title}</Title>
      <Form onSubmit={addContact}>
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

ContactForm.propTypes = {
  title: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
