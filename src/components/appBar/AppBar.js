import Navigation from "../navigation/Navigation";
import UserMenu from "../usermenu/UserMenu";
import AuthNav from "../authNav/AuthNav";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import s from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
