import React, { Component } from 'react'
import logo from '../Images/trainLogo.png'

class Splash extends Component {

  render () {
    return <div className='splash'>
      <img className='logo' src={logo} height='500px' width='500px' />
    </div>
  }
}

export default Splash
