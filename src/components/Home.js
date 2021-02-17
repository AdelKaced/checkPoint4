import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [categories, setCategories] = useState('');

  useEffect(() => {
    const url = 'http://localhost:5000/categories';
    axios
      .get(url)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="homePage">
      <div className="paraHome">
        <h1>
          Le soin <br />
          par les <br />
          plantes{' '}
        </h1>
        <hr />
        <h2>Etre en bonne sante c est possible grace aux plantes </h2>
        <h3>Tu decouvriras comment les consommer</h3>
      </div>
      <div className="imageHome">
        {categories &&
          categories.map((cat) => (
            <div>
              <Link to={`/plantes/${cat.idCategorie}`}>
                <img src={cat.picture} alt={cat.name} />
              </Link>
              <h3>{cat.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
