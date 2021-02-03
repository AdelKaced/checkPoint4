import React from 'react';

import './Plante.css';

function Plante(props) {
  // const [image, setImage ] = useState(props.id)

  console.log(props);
  return (
    <div className="section">
      <h1 className="nameplante" >Les superaliments </h1>
      <div className="sectionplantes">
        <div className="detailplante">
          <div>
            <img
              src="https://www.bioalaune.com/img/article/7142-10-super-aliments-qui-vous-aident-rester-jeune.png"
              alt="1"
            />
          </div>
          <div className="detailsPara">
            <p>
              Les superaliments ne sont pas nouveaux et existent en réalité
              depuis plusieurs siècles. Très populaires de nos jours, les
              superaliments sont des baies, des graines, des fruits, des légumes
              ou même des algues qui possèdent de fortes teneurs en substances
              nutritives bénéfiques pour la santé. Mais alors qui sont vraiment
              les superaliments ? Pourquoi sont-ils importants, comment les
              manger, quels sont leurs bienfaits ? Et surtout comment choisir
              parmi tous les superaliments ? Les réponses à vos questions se
              trouvent dans ce guide complet sur les superaliments.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="detailsplante">
        <div>
          <img src="https://static.passeportsante.net/200x200/i87141-baies-de-goji-pour-maigrir-les-bienfaits-des-baies-de-goji.jpeg"/>
          <h3>LA BAIE DE GOJI</h3>
          <p>
            La baie de Goji est issue du lyciet (Lycium barbarum), arbuste
            originaire d’Asie pouvant atteindre 3 à 5 mètres de haut, de la
            famille des Solanacées. Ces fruits que l’on nomme baie de Goji, ont
            une couleur rouge-orangée et sont récoltées d’août à octobre. Ces
            baies sont ensuite séchées à l’ombre puis au soleil, afin d’obtenir
            des baies séchées à l’extérieur tout en préservant l’onctuosité de
            la pulpe.
          </p>
        </div>
        <div>
          <img src="https://img.farmforage.com/img/agro-2019/podborka-luchshih-receptov-zagotovki-ryabini-aronii-chernoplodnoj-na-zimu.jpg" />
          <h3>LA BAIE D'ARONIA</h3>
          <p>
          L’aronia (Aronia melanocarpa) est un arbuste originaire d’Amérique du nord de la famille des Rosacées, pouvant atteindre jusqu’à 2,50 mètres de hauteur ou de largeur. Ses fleurs blanches laissent place en automne à des fruits, les baies d’aronia. Ces baies sont de forme arrondie, noires et sont similaires aux cassis. Très parfumées et riches en antioxydants, les baies d'Aronia peuvent être utiliser cuites, en jus ou tout simplement crues.
          </p>
        </div>
        <div>
          <img src="https://i.pinimg.com/originals/f9/e7/89/f9e78900e40eb92c01d8e09cc46915aa.jpg" />
          <h3>LA CRANBERRY</h3>
          <p>
            La baie de Goji est issue du lyciet (Lycium barbarum), arbuste
            originaire d’Asie pouvant atteindre 3 à 5 mètres de haut, de la
            famille des Solanacées. Ces fruits que l’on nomme baie de Goji, ont
            une couleur rouge-orangée et sont récoltées d’août à octobre. Ces
            baies sont ensuite séchées à l’ombre puis au soleil, afin d’obtenir
            des baies séchées à l’extérieur tout en préservant l’onctuosité de
            la pulpe.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Plante;
