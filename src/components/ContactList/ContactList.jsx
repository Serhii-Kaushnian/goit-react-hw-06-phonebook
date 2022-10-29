import {
  ContactsListWrapper,
  Title,
  List,
  ItemContainer,
  Item,
  Button,
  ItemContainerSpan,
} from './ContactList.styled';

import { FaRegSadCry } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/slice';

export default function ContactList() {
  const dispatch = useDispatch();

  const contactslist = useSelector(state => state.contactslist);

  const getFilteredContacts = () => {
    if (contactslist.contacts) {
      return contactslist.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(contactslist.filter);
      });
    }
  };

  const filteredContacts = getFilteredContacts();

  const deleteContact = e => {
    const id = e.currentTarget.id;
    dispatch(deleteContacts(id));
  };
  return (
    <ContactsListWrapper>
      <Title>Contacts</Title>
      {filteredContacts.length !== 0 ? (
        <List>
          {filteredContacts.map(value => {
            return (
              <Item key={value.id}>
                <ItemContainer>
                  {value.name} :
                  <ItemContainerSpan>{value.number}</ItemContainerSpan>
                  <Button onClick={deleteContact} id={value.id} type="button">
                    Delete contact
                  </Button>
                </ItemContainer>
              </Item>
            );
          })}
        </List>
      ) : (
        <>
          <h3>
            Contact list is empty <FaRegSadCry />
          </h3>
        </>
      )}
    </ContactsListWrapper>
  );
}
