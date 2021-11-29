// import { useDispatch, useSelector } from "react-redux";
// import { authOperations, authSelectors } from "../../redux/auth";
// import s from "./UserMenu.module.css";

export default function UserMenu() {
  //   const dispatch = useDispatch();
  //   const name = useSelector(authSelectors.getUserName);

  return (
    <div>
      <span>Welcome, </span>
      <button
        // className={s.button}
        type="button"
        // onClick={() => dispatch(authOperations.logOut())}
      >
        logOut
      </button>
    </div>
  );
}
