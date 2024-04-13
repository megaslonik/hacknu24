import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/main">Offers</Link>
        </li>
        <li>
          <Link to="/cards">Bank Cards</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
