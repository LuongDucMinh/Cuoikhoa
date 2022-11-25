import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Header() {
  return (
    <div className="header">
      <ul>
        <li className='li'>        
          <Link to="/"> THỰC ĐƠN </Link>  
        </li>
      </ul>
    </div>
  )
}

export default Header
