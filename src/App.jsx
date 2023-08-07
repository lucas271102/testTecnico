import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Home from './components/Home'
function App() {


  return (
    <>
    <Navbar/>
    <Home/>
    <Outlet/>
    </>
  )
}

export default App
