import React, { Component } from 'react'
import { Link } from 'react-router'
import homeIcon from '../Images/home_4.png'
import train from '../Images/Train_whole.png'

class Delivery extends Component {

  render () {
    return <div>
      <h1 className='deliveryHeader'>Delivery</h1>
      <section className='home'>
        <Link to='/'>
          <img src={homeIcon} height='50px' width='50px' />
        </Link>
      </section>
      <img className='trainImage' src={train} />
      <button className='deliver'>Deliver</button>
    </div>
  }
}

export default Delivery
