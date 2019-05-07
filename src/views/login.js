import React, { Component } from 'react'
import { Link } from "react-router-dom";
class Login extends Component {
  render() {
    return (
      <>
        <h2>Login</h2>
        <form>
          <ul>
            <li>
              用户名：
              <input type="text" />
            </li>
            <li>
              密  码：
              <input type="password" />
            </li>
            <li>
            <input type="submit" value="Submit" />
            </li>
          </ul>
        </form>
        <Link to="/home/">Home</Link>
      </>
    )
  } 
}

export default Login