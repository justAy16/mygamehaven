import React, { useEffect, useState } from 'react'
import "./Library.scss";
import Card from "../../components/Card/Card.jsx";
import axios from 'axios'


function Library() {

    const APIKey = import.meta.env.VITE_RAWGKEY;
    const apiUrl = 'https://api.rawg.io/api';
    const API = `${apiUrl}/games?key=${APIKey}&page=1&page_size=100`;
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
    <div className="library__wrapper">
      <h1>
        Top Games <span>To See</span>
      </h1>

      <Card  gameList={gameList}/>
    </div>
  )
}

export default Library