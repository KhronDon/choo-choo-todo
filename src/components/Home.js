import React, { Component } from 'react'
// import { Link } from 'react-router'
import Families from './Families'
import Splash from './Splash'
import withAuth from '../utils/withAuth'

@withAuth
class Home extends Component {

  render () {
    return <div>
      <ul className='users'>
        {this.props.auth.isSignedIn ? <Families /> : <Splash />}
      </ul>
    </div>
  }
}

export default Home
