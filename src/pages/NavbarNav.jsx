import React from "react";
import { Link } from "react-router-dom";

function NavbarNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutNav">About</Link>
          </li>
          <li>
            <Link to="/contactNav">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavbarNav;
