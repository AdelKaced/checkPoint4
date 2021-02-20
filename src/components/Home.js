import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';

function Home() {
  const [categories, setCategories] = useState('');
  const [add, setAdd] = useState(false);
  const [theme, setTheme] = useState(false);
  const [description, setDescription] = useState(false);

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
        <div>
          <button className="addCat" onClick="">
            <div onClick={() => setAdd(true)}>
              {!add ? (
                <div>
                  <FaPlus />
                </div>
              ) : (
                <div>
                  {!theme ? (
                    <div>
                      <label>Choisis un theme</label>
                      <input type="text" />
                      <button onClick={() => setTheme(true)}> Valide </button>
                    </div>
                  ) : (
                    <div>
                      {!description ? (
                        <div>
                          <label>Decris mois le theme </label>
                          <input type="textArea" />
                          <button onClick={() => setDescription(true)}>
                            {' '}
                            Valide{' '}
                          </button>
                        </div>
                      ) : (
                        <div>
                          <label>choisis une image </label>
                          <input type="text" />
                          <button 
                          // onClick={() => setDescription(true)}
                          >
                            {' '}
                            Valide{' '}
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </button>
          <h3>Ajoute une catégorie</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
