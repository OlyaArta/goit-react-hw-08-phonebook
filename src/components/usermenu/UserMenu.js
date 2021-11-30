import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selectors";
import defaultAvatar from "./defaultAvatar.jpg";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={s.usermenu}>
      <img src={avatar} alt="" width="30" height="30" />
      <span className={s.name}>Welcome, {name}!</span>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </button>
    </div>
  );
}
