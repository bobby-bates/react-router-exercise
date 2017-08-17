import React, { Component } from 'react'
import Greeting from './Greeting'

class IndexRouteContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {


    return(
        <div>
          <h1>Say things to Ron.</h1>
          <img className='ron-container' src='http://www.readunwritten.com/wp-content/uploads/2014/12/blog3.jpg' />
        </div>
    )
  }
}

export default IndexRouteContainer
