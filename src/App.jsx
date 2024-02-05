import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Browse from './pages/Browse/Browse'
import Header from './components/Header/Header'
import Profile from './pages/Profile/Profile'
import Library from './pages/Library/Library'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/browse' element={<Browse/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/library' element={<Library/>}/>
        </Routes>
        <span className='copyright'>
          Copyright @ 2024 SleekInc.org, All rights reserved
        </span>
      </BrowserRouter>
    </div>
  )
}

export default App
