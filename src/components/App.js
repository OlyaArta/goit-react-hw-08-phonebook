import { lazy, Suspense } from "react";
// import { v4 as uuidv4 } from "uuid";
import { Route, Switch } from "react-router";
import AppBar from "./appBar/AppBar";

const StartView = lazy(() => import("../views/startView"));
const RegisterView = lazy(() => import("../views/registration/registerView"));
const LoginView = lazy(() => import("../views/login/LoginView"));
const ContactView = lazy(() => import("../views/contactview/ContactView"));

function App() {
  return (
    <>
      <AppBar />
      <Suspense>
        <Switch>
          <Route path="/" element={<StartView />}></Route>
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/contacts" element={<ContactView />} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;

// // const [contacts, setContact] = useState(() => {
// //   return JSON.parse(window.localStorage.getItem("contacts")) ?? "";
// // });
// const [contacts, setContact] = useState([]);

// useEffect(() => {
//   const contacts = localStorage.getItem("contacts");
//   const parsedContacts = JSON.parse(contacts);
//   if (parsedContacts) {
//     setContact(parsedContacts);
//   }
// }, []);

// useEffect(() => {
//   window.localStorage.setItem("contacts", JSON.stringify(contacts));
// }, [contacts]);

// const addContact = ({ name, number }) => {
//   const newContact = {
//     id: uuidv4(),
//     name,
//     number,
//   };

//   // this.setState(({ contacts }) => {
//   if (contacts.some((contact) => contact.name === name)) {
//     return alert(`${name} is already in contacts!`);
//   }

//   setContact((prevContacts) => [newContact, ...contacts]);
// };

// // this.setState(({ contacts }) => ({
// //   contacts: [newContact, ...contacts],
// // }));
// const [filter, setFilter] = useState("");

// const watchFilter = (event) => {
//   setFilter(event.currentTarget.value);
// };

// const filterContacts = () => {
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// const deleteContact = (id) => {
//   setContact((prevContacts) =>
//     prevContacts.filter((contact) => contact.id !== id)
//   );
// };

// const results = filterContacts();
