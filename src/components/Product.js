import React, { useEffect } from 'react';
import axios from 'axios';

import './Products.css';

function Products(props) {
  const [data, setData] = React.useState([]);

  console.log(props.match.url);
  useEffect(() => {
    const url = `http://localhost:5000${props.match.url}`;
    axios.get(url).then((res) => setData(res.data));
    // eslint-disable-next-line
  }, []);

  console.log(data);
  return (
    <div className="products">
      {data.map((item) => (
        <div className="items">
          <h3>{item.name}</h3>
          <p>{item.desciption}</p>
          <img src={item.picture} alt={item.name}/>
          <div>{item.price}€ </div>
          <div><button> Ajouter au panier</button></div>
        </div>
      ))}
    </div>
  );
}

export default Products;
