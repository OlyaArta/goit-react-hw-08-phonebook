// import React, { Component } from "react";
import { useState } from "react";
import shortid from "shortid";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/phonebook-operations";
import { getContacts } from "../../redux/phonebook-selectors";
// import PropTypes from "prop-types";
import s from "./Form.module.css";

function Form() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onSubmit = (name, number) => dispatch(addContact(name, number));

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isContactsIncludes = contacts.find(
      (contact) => contact.name.name === name
      // (contact) => contact.name === name
    );

    if (isContactsIncludes) {
      return alert(`${name} is alredy in contacts`);
    } else {
      onSubmit({ name, number });
      reset();
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label htmlFor={nameInputId} className={s.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
          id={nameInputId}
          className={s.input}
        />

        <label htmlFor={numberInputId} className={s.label}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
          id={numberInputId}
          className={s.input}
        />

        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    </>
  );
}

export default Form;
