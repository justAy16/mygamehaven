import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import GamingLibrary from '../../components/GamingLibrary/GamingLibrary'
import MostPopular from '../../components/MostPopular/MostPopular'
import './Home.scss'
import Browse from '../Browse/Browse'

function Home() {

  return (
    <div className='home__wrapper container'>
        <Banner/>
        <Browse />
        <MostPopular/>
    </div>
  )
}

export default Home