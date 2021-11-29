import Container from "../../components/container/Container";
import Form from "../../components/form/Form";
import ContactList from "../../components/contactList/ContactList";
import Filter from "../../components/filter/Filter";

export default function ContactView() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
