import { useState } from 'react'
import './App.css'
import Homepage from './Pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Robotica from './Pages/Robotica'




function App() {

  return (
    
    <div>
      <Header />
      <Routes>
        <Route path="/cursos" element={<Homepage/>} />
        <Route path="/cursos/robotica" element={<Robotica/>} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
