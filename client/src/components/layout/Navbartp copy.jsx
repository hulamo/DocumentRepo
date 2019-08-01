import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";

const Navbar = () => {
  return (
    <nav
      style={{ marginBottom: "120px" }}
      className="navbar navbar-expand-md fixed-top bg-dark navbar-dark"
    >
      <Link className="navbar-brand" to="/dashboard">
        TeamPencil
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/dfolders">
              Folders
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/archivos">
              Archivos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contactos">
              Contactos
            </Link>
          </li>
        </ul>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item">
          <Link className="nav-link" to="/micuenta">
            Mi Cuenta
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={logoutUser}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
