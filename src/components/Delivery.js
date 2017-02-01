import React, { Component } from 'react'
import { Link } from 'react-router'

class Delivery extends Component {

  render () {
    return <div>
      <h1 className='deliveryHeader'>Delivery</h1>
      <button className='home'>
        <Link to='/'>Home</Link>
      </button>
      <img className='train' src={'http://www.clker.com/cliparts/g/L/4/1/Z/S/cartoon-train-hi.png'} />
      <button className='deliver'>Deliver</button>
    </div>
  }
}

export default Delivery
