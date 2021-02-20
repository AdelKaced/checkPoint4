import React from 'react';

import './Admin.css';

function Admin() {
  return (
    <div className="admin">
      <form>
        <label>Email</label>
        <input type="text" placeholder="renseigne ton email" />
        <label>Mot de passe </label>
        <input type="text" placeholder="renseigne ton mot de passe" />
        <input type="submit" value="connexion" />
      </form>
    </div>
  );
}

export default Admin;
