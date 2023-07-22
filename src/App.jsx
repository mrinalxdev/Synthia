import './App.css'
import {  Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import WhyPage from './pages/Home/WhyPage'

function App() {

  return (
    <>
    <Navbar />
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/why' element={<WhyPage />} />
      </Routes>
     
    </>
  )
}

export default App
