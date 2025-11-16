import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">
              Create
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/getAll" className="nav-link">
              GetAll
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/update" className="nav-link">
              Update
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/delete" className="nav-link">
              Delete
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
