import React from 'react'
import Banner from '../../components/Banner/Banner'
import GamingLibrary from '../../components/GamingLibrary/GamingLibrary'
import MostPopular from '../../components/MostPopular/MostPopular'
import './Home.scss'

function Home() {
  return (
    <div className='home__wrapper container'>
        <Banner/>
        <GamingLibrary/>
        <MostPopular/>
    </div>
  )
}

export default Home