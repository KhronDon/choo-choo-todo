import React, { Component } from 'react'
import { Link } from 'react-router'
import homeIcon from '../Images/home_4.png'

class Bank extends Component {

  render () {
    return <div>
      <h2 className='mainHeader'>Bank</h2>
      <section className='home'>
        <Link to='/'>
          <img src={homeIcon} height='50px' width='50px' />
        </Link>
      </section>
      <img className='bank' src={'https://img.clipartfest.com/d71f05b7f0842f09bdd1e92596f912bd_bank-clipart-bank-clip-art-2-bank-clipart_468-594.png'} />
      <h3 className='creditsAvailable'>Credits $$</h3>
    </div>
  }
}

export default Bank
