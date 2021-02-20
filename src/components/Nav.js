import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

import Admin from './Admin';

import './Nav.css';

function Nav() {
  const [menu, setMenu] = React.useState(false);
  const [connect, setConnect] = React.useState(false);

  const handleConnect =() => {
    setConnect(!connect);
  }

  return (
    <div className="nav">
      {/* <a href="#" className="logo"> */}
      <div className="logo"> Les plantes</div>
      {/* </a> */}
      {!connect  ?
      <ul className={menu && 'show'}>
        <span className="iconMenu" onClick={() => setMenu(!menu)}>
          {menu ? <ImCross /> : <FaBars />}
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
        <li>
          {/* <Link to="/espaceadmin"> */}
            <button onClick={handleConnect}>Admin </button>      
          {/* </Link> */}
        </li>
      </ul>
        : connect && <div className="connexion"><Admin /></div>}
    </div>
  );
}

export default Nav;
