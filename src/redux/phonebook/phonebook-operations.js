import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://6192729d57b14a0017c4a0b9.mockapi.io";
// https://connections-api.herokuapp.com/
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const addContact = createAsyncThunk(
  "contacts/addContact",

  async (contact) => {
    const { data } = await axios.post("/contacts", contact);
    return data;
  }
);
// export const addContact = createAsyncThunk(
//   "contacts/addContact",

//   async (contact) => {
//     try {
//       const { data } = await axios.post("/contacts", contact);
//       return data;
//     } catch (error) {
//       if (data.name === name) {
//         return toast.info("This contact is already exist!", {
//           theme: "colored",
//         });
//       }
//     }
//   }
// );

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    const {
      data: { id },
    } = await axios.delete(`./contacts/${contactId}`);
    return id;
  }
);

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const { data } = await axios.get("/contacts");
    return data;
  }
);

///////////////пример с асинхронной функцией/////////////////

// export const addContact = (name, number) => async (dispatch) => {
//   const contact = { name, number };

//   dispatch(addContactRequest());

//   try {
//     const { data } = await axios.post("/contacts", contact);
//     dispatch(addContactSuccess(data));
//   } catch (error) {
//     dispatch(addContactError(error));
//   }
//////////////////////////////////////////////////
//   axios
//     .post("/contacts", contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch((error) => dispatch(addContactError(error)));
// };

// export const deleteContact = (contactId) => (dispatch) => {
//   dispatch(deleteContactRequest());

//   axios
//     .delete(`./contacts/${contactId}`)
//     .then(() => dispatch(deleteContactSuccess(contactId)))
//     .catch((error) => dispatch(deleteContactError(error)));
// };
