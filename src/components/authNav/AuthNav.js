import React from "react";
import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={s.nav}>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        // className={s.link}
        // isActive={s.isActive}
        to="/register"
      >
        Registration
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        to="/login"
      >
        login
      </NavLink>
    </div>
  );
}
