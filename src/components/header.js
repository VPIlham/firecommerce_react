import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const HeaderComponent = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            FireCommerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FaBars size={25} color="white"></FaBars>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  user
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  logout
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
