import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="12">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="123">People</a>
        </li>
        <li>
          <a href="123">Planets</a>
        </li>
        <li>
          <a href="123">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;