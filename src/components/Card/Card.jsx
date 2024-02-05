import React from "react";
import data from "../../data";
import "./Card.scss";
const Card = ({gameList}) => {
    const openRawgPage = (gameId) => {
        // Construct the RAWG URL for the specific game using its ID
        const rawgPageUrl = `https://rawg.io/games/${gameId}`;
        
        // Open the RAWG page in a new tab
        window.open(rawgPageUrl, "_blank");
      };
  return (
    <div className="card">
      {gameList.map(({ id, background_image, name, released}) => (
        <div className="card__container" key={id} onClick={() => openRawgPage(id)}>
          <img src={background_image} alt="img" />
          <h2>{name}</h2>
          <p>Released: {released}</p>
        </div>
      ))}
       
      
    </div>
  );
};

export default Card;