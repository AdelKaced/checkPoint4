import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css'

function Nav() {
    return (
        <div className="nav">
            <a href="#" class="logo">Les plantes</a>
            <ul>
               <li><Link to='/' >Home</Link></li> 
               <li><Link to='/aromatherapie' >Aromatherapie </Link></li> 
               <li><Link to='/homeopathie' >Homeopathie </Link></li> 
               <li><Link to='/superaliments' >Superaliments </Link></li> 
            </ul>
        </div>
    )
}

export default Nav
