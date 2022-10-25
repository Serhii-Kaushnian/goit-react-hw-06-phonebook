import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    },
    deleteContacts: (state, action) => {
      const deleteContacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      return {
        ...state,
        contacts: [...deleteContacts],
      };
    },
    filterContacts: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
    clearFilter: state => {
      return {
        ...state,
        filter: '',
      };
    },
  },
});

export const { addContact, deleteContacts, filterContacts, clearFilter } =
  contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
