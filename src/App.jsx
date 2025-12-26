import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Header from "./Components/Header.jsx"
import Footer from './Components/Footer.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import ContactUs from './Pages/ContactUs.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'
import AutoInsurance from "./Pages/Auto-Insurance.jsx"
import LifeInsurance from './Pages/Life-Insurance.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
         <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/services" element={<h1>Services</h1>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/autoinsurance" element={<AutoInsurance/>} />
        <Route path="/lifeinsurance" element={<LifeInsurance/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
