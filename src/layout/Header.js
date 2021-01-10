import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="mb-4">
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Chat app
          </NavLink>
          <ul className="nav">
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                to="/"
                activeClassName="active"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                to="/chat"
                activeClassName="active"
              >
                Chat
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                to="/profile"
                activeClassName="active"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
