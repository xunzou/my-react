import React from 'react'
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">login</Link>
        </li>
        <li>
          <Link to="/home/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
      </ul>
    </nav>
  )
}