import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact");

export const changeFilter = createAction("contacts/changeFilter");

export const deleteContact = createAction("contacts/deleteContact");

export const fetchContact = createAction("contacts/fetchContacts");
////////////////////////////////////
// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = (conactId) => ({
//   type: types.DELETE,
//   payload: conactId,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
