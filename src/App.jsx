import React from "react"
import { Routes, Route } from "react-router-dom"
import About from "./components/About.jsx"
import Home from "./components/Home.jsx"
import Vans from "./components/Vans.jsx"
import VanDetail from "./components/VanDetail.jsx"
import Layout from "./components/Layout.jsx"
import Dashboard from "./components/host/Dashboard"
import Reviews from "./components/host/Reviews"
import Income from "./components/host/Income"
import HostLayout from "./components/HostLayout.jsx"
import './index.css';



function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

        </Route>
      </Routes>
    </div>

  );
}

export default App;
