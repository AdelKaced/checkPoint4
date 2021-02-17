import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Plante.css';

function Plante(props) {
  const [planteData, setPlanteData] = useState('');
  const id = props.match.params.id;

  useEffect(() => {
    const url = `http://localhost:5000/categories/${id}/plantes`;
    axios.get(url).then((res) => setPlanteData(res.data));
    // eslint-disable-next-line
  }, [id]);

  console.log('plantData', planteData);
  console.log(id);

  return (
    <div className="section">
      <div >
        <h1 className="nameplante">{planteData && planteData[0].catName}</h1>
        <div className="sectionplantes" > 
          <img src={planteData && planteData[0].pictCat} alt="plantimg" />    
          <p>{planteData && planteData[0].descCat}</p>
        </div>
      </div>
      <div className="plantrubrique">
      {planteData && planteData.map(data => 
      <div className="detailsplante">
        <div className="blocdetails">
          <img
            src={data.pictPlant}
            alt="plantimg"
          />
          <h3>{data.namePlant}</h3>
          <p>
            {data.descPlant}
          </p>
        </div>
      </div>)}
      </div>
    </div>
  );
}

export default Plante;
