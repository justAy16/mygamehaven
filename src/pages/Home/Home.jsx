import React from 'react'
import Banner from '../../components/Banner/Banner'
import GamingLibrary from '../../components/GamingLibrary/GamingLibrary'
import MostPopular from '../../components/MostPopular/MostPopular'
import './Home.scss'
import axios from 'axios'

function Home() {
    const APIKey = import.meta.env.VITE_RAWGKEY;
    const apiUrl = 'https://api.rawg.io/api';
    const endpoint = `/games?key=${APIKey}`
    axios.get(apiUrl + endpoint)
  .then(response => {
    const gamesList = response.data.results;
    console.log('List of Games:', gamesList);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

  return (
    <div className='home__wrapper container'>
        <Banner/>
        <GamingLibrary/>
        <MostPopular/>
    </div>
  )
}

export default Home