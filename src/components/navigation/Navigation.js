import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";
import s from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        // className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        className={s.link}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          // className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          className={s.link}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
