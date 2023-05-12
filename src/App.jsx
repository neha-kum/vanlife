import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import About from "./components/About.jsx"
import Home from "./components/Home.jsx"
import Vans from "./components/Vans.jsx"
import VanDetail from "./components/VanDetail.jsx"

import './index.css';



function App() {
  return (
    <div>
    <header>
     <Link className="site-logo" to="/">#Vanlife</Link>
     <nav>
      <Link to="/about">About</Link>
      <Link to="/vans">Vans</Link>
     </nav>
    </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail/>}/>
      
      </Routes>
      </div>

  );
}

export default App;