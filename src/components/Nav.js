import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

import './Nav.css';

function Nav() {
  const [menu, setMenu] = React.useState(false);
  return (
    <div className="nav">
      <a href="#" className="logo">
        Les plantes
      </a>
      <ul className={menu && "show"}>
        <span className="iconMenu" onClick={() => setMenu(!menu)}>
          {menu ? <ImCross/> : <FaBars/>}
        </span>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/plantes/1">Aromatherapie </Link>
        </li>
        <li>
          <Link to="/plantes/2">Homeopathie </Link>
        </li>
        <li>
          <Link to="/plantes/3">Superaliments </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
