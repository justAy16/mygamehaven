import React, { useEffect, useState } from 'react'
import "./MostPopular.scss";
import Card from "../Card/Card.jsx";
import axios from 'axios'
import { Link } from 'react-router-dom';


const MostPopular = () => {

    const APIKey = import.meta.env.VITE_RAWGKEY;
    const apiUrl = 'https://api.rawg.io/api';
    const endpoint = `/games?key=${APIKey}`
    const API = `${apiUrl + endpoint}`
    const [gameList, setGameList] = useState([])

useEffect(()=>{
    axios.get(API)
    .then(response => {
      const gamesList = response.data.results;
      setGameList(gamesList)

      console.log('List of Games:', gamesList);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
},[API])

  return (
    <div className="popular__wrapper">
      <h1>
        Most Popular <span>Right Now</span>
      </h1>

      <Card  gameList={gameList}/>
      <div className="btn">
        <Link to="/library">
        <button>Discover More Games</button>
        </Link>
      </div>
    </div>
  );
};

export default MostPopular;
