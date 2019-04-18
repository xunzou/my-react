import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './layouts/header'
import Login from './views/login'
import Home from './views/home'
import About from './views/about'


const NoMatch = () => <h2>404</h2>

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  } 
}

export default App
