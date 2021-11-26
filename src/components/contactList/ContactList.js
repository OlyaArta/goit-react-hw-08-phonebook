// import React, { Component } from "react";
// import PropTypes from "prop-types";
import ContactItem from "./ContactItem";
import s from "./Contact.module.css";
import { useEffect } from "react";
// import * as actions from "../../redux/phonebook-actions";
import * as operations from "../../redux/phonebook-operations";
import { getVisibleContacts } from "../../redux/phonebook-selectors";
import { useSelector, useDispatch } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const deleteContact = (id) => dispatch(operations.deleteContact(id));

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            name={name}
            number={number}
            onDeleteContact={deleteContact}
            key={id}
            id={id}
          />
        );
      })}
    </ul>
  );
}

// class ContactList extends Component {
//   render() {
//     const contacts = this.props.contacts;
//     const deleteContacts = this.props.onDeleteContact;
//     console.log(contacts);
//     return (
//       <ul>
//         {contacts.map(({ id, name, number }) => (
//           <ContactItem
//             name={name}
//             number={number}
//             onDeleteContact={deleteContacts}
//             key={id}
//             id={id}
//           />
//         ))}
//       </ul>
//     );
//   }
// }

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };

// export default ContactList;
