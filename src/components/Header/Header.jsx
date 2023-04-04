import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/createorder'>Create Order</Link></li>
        <li><Link to='/editorder'>Edit Order</Link></li>
        <li><Link to='/listoforder'>List of Order</Link></li>
        <li><Link to='/orderdetails'>Order Details</Link></li>
      </ul>
    </nav>
  )
}

export default Header
