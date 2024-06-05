import React from 'react'
import "./Tabs.scss"
import { Link } from 'react-router-dom'
export default function Tabs() {
  return (
    <nav className="tabs">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )  
}
