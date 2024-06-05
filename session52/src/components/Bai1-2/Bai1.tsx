import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Tabs from './Tabs';
export default function Bai1() {
  return (
    <div>Bai1
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/Tabs" element={<Tabs></Tabs>} />
        </Routes>
    </div>
  )
}
