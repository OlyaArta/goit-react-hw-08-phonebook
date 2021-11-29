import { combineReducers } from "redux";
import {
  //   deleteContactSuccess,
  //   deleteContactError,
  //   deleteContactRequest,
  changeFilter,
  //   addContactError,
  //   addContactRequest,
  //   addContactSuccess,
  //   fetchContactSuccess,
  //   fetchContactRequest,
  //   fetchContactError,
} from "./phonebook-actions";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./phonebook-operations";
// import { addContact } from "./phonebook-operations";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (state, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,

  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const initialState = combineReducers({
  items,
  filter,
  loading,
});

export default initialState;

////////////before//////////////
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

// const initialState = combineReducers({
//   items,
//   filter,
// });
