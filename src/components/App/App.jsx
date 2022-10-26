import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import { AppWrapper, Wrapper } from './App.styled';

export default function App() {
  return (
    <AppWrapper>
      <Wrapper>
        <ContactForm></ContactForm>
        <Filter></Filter>
      </Wrapper>
      <ContactList></ContactList>
    </AppWrapper>
  );
}
