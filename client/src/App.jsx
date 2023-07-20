import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/why' element={<WhyPage />} />
      </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
 