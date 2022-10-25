// import { createReducer } from '@reduxjs/toolkit';

// import {
//   addContact,
//   deleteContacts,
//   filterContacts,
//   clearFilter,
// } from './actions';
// const contactsInitialState = {
//   contacts: [],
//   filter: '',
// };

// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     return {
//       ...state,
//       contacts: [...state.contacts, action.payload],
//     };
//   },
//   [deleteContacts]: (state, action) => {
//     const deleteContacts = state.contacts.filter(
//       contact => contact.id !== action.payload
//     );
//     return {
//       ...state,
//       contacts: [...deleteContacts],
//     };
//   },
//   [filterContacts]: (state, action) => {
//     return {
//       ...state,
//       filter: action.payload,
//     };
//   },
//   [clearFilter]: state => {
//     return {
//       ...state,
//       filter: '',
//     };
//   },
// });
