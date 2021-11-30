import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
import { Switch } from "react-router";
import authOperations from "../redux/auth/auth-operations";
import AppBar from "./appBar/AppBar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import authSelectors from "../redux/auth/auth-selectors";
import Spinner from "./Spinner/Spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StartView = lazy(() => import("../views/startView"));
const RegisterView = lazy(() => import("../views/registration/registerView"));
const LoginView = lazy(() => import("../views/login/LoginView"));
const ContactView = lazy(() => import("../views/contactview/ContactView"));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />

        <Switch>
          {/* <Suspense fallback={<p>Loading...</p>}> */}
          <Suspense fallback={<Spinner />}>
            <PublicRoute exact path="/">
              <StartView />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactView />
            </PrivateRoute>
          </Suspense>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Switch>
      </>
    )
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
