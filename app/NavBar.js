import React, { Component } from 'react'
import { Link } from 'react-router'

class NavBar extends Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    // debugger
    let path = this.props.location.pathname
    let greetingName = this.props.children.props.routes[0].childRoutes[0].name
    let goodbyeName = this.props.children.props.routes[0].childRoutes[1].name
    let customGreetingName = this.props.children.props.routes[0].childRoutes[2].name

    let breadcrumbs
    if (path === '/') {
      breadcrumbs = <li>
                      <span className='show-for-sr'>Curent: </span> Home
                    </li>
    } else if (path === '/greeting') {
      breadcrumbs = <div>
                      <li><Link to='/'>Home</Link></li>
                      <li>
                        <span className='show-for-sr'>Current: </span> Greeting
                      </li>
                    </div>
    } else if (path === '/goodbye') {
      breadcrumbs = <div>
                      <li><Link to='/'>Home</Link></li>
                      <li>
                        <span className='show-for-sr'>Current: </span> Goodbye
                      </li>
                    </div>
    } else if (path === '/custom-greeting') {
      breadcrumbs = <div>
                      <li><Link to='/'>Home</Link></li>
                      <li>
                        <span className='show-for-sr'>Current: </span> Custom Greeting
                      </li>
                    </div>
    }

    return(
      <div className='nav-bar-container'>
        <div className='top-bar'>
          <div className='top-bar-left'>
            <img className='tom' src='http://tvdaily.com/wp-content/uploads/2015/11/Screen-Shot-2015-11-06-at-15.20.19.png' />
            {/* <span className='menu-text'>Say Things to Ron.</span> */}
            <Link to='/'>Home</Link>
            {' '}
            <Link to='/greeting'>{greetingName}</Link>
            {' '}
            <Link to='/goodbye'>{goodbyeName}</Link>
            {' '}
            <Link to='/custom-greeting'>{customGreetingName}</Link>
          </div>
        </div>
        {/* Breadcrumbs not currently using state */}
        <nav aria-label='You are here:' role='navigation'>
          <ul className='breadcrumbs'>
            {breadcrumbs}
          </ul>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default NavBar
