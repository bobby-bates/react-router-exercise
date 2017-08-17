import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import IndexRouteContainer from './IndexRouteContainer'
import Greeting from './Greeting'
import Goodbye from './Goodbye'
import NavBar from './NavBar'
import CustomGreeting from './CustomGreeting'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={IndexRouteContainer} />
        <Route
          path='/greeting'
          component={Greeting}
          name='Greeting'
        />
        <Route
          path='/goodbye'
          component={Goodbye}
          name='Goodbye'
        />
        <Route
          path='/custom-greeting'
          component={CustomGreeting}
          name='Custom Greeting'
        />
      </Route>
    </Router>
    )
  }
}

export default App
