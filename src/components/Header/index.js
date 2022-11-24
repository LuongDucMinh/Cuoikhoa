import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Header() {
  return (
    <div className="header">
      <ul>
        <li className='li'>
          <Link to="/"> HOME </Link>
          <Link to="/products"> THỰC ĐƠN </Link>
          <Link to="/welcome"> KHUYẾN MÃI</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
