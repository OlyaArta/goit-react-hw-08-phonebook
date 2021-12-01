import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";
import s from "./LoginView.module.css";

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.box}>
      <form autoComplete="on" onSubmit={handleSubmit}>
        <label className={s.label}>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="username"
            className={s.input}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            autoComplete="current-password"
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <button type="submit" className={s.button}>
          Login
        </button>
      </form>
    </div>
  );
}
