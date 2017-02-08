import React, { Component } from 'react'
import { Link } from 'react-router'
import homeIcon from '../images/home_4.png'

class Spend extends Component {

  render () {
    return <div>
      <h2 className='mainHeader'>Spend Credits</h2>
      <section className='home'>
        <Link to='/'>
          <img src={homeIcon} height='50px' width='50px' />
        </Link>
      </section>
    </div>
  }
}

export default Spend
