import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
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
        <div>
          <Link to="/plantes/aromatherapie">
            <img
              src="https://www.insphy.com/I-Grande-3275-qu-est-ce-que-l-aromatherapie-notre-definition.net.jpg"
              alt="1"
            />
          </Link>
          <h3>Les huiles essentielles</h3>
        </div>
        <div>
        <Link to="/plantes/superaliments">
            <img
              src="https://blog.soin-et-nature.com/app/uploads/2016/06/homeopathie-utiliser.jpg"
              alt="3"
            />
          </Link>
          <h3>L'homeopathie</h3>
        </div>
        <div>
        <Link to="/plantes/superaliments">
            <img
              src="https://www.bioalaune.com/img/article/7142-10-super-aliments-qui-vous-aident-rester-jeune.png"
              alt="2"
            />
          </Link>
          <h3>Les superaliments </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
