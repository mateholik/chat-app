import React from "react";
import { NavLink } from "react-router-dom";
import gitHubImg from "./../assets/github.svg";

export default function Header() {
  return (
    <header className="mb-4">
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a
            href="https://github.com/mateholik/chat-app"
            target="_blank"
            className="navbar-brand"
          >
            Repo
            <img
              style={{ width: "1.5rem", marginLeft: "0.5rem" }}
              src={gitHubImg}
              alt="git hub"
            />
          </a>
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
