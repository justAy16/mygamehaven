import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Browse from './pages/Browse/Browse'
import Header from './components/Header/Header'
import Profile from './pages/Profile/Profile'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/browse' element={<Browse/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
        <span className='copyright'>
          Copyright @ 2024 Sleek Inc.org, All rights reserved
        </span>
      </BrowserRouter>
    </div>
  )
}

export default App
