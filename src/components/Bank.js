import React, { Component } from 'react'
import { Link } from 'react-router'
import homeIcon from '../Images/home_4.png'
import bank from '../Images/Train_bank.png'

class Bank extends Component {

  render () {
    return <div>
      <h2 className='mainHeader'>Bank</h2>
      <section className='home'>
        <Link to='/'>
          <img src={homeIcon} height='50px' width='50px' />
        </Link>
      </section>
      <img className='bank' src={bank} />
      <h3 className='creditsAvailable'>Credits $$</h3>
    </div>
  }
}

export default Bank
