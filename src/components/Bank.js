import React, { Component } from 'react'

class Bank extends Component {

  render () {
    return <div>
      <h1 className='bankHeader'>Bank</h1>
      <button className='home'>Home</button>
      <img className='bank' src={'https://img.clipartfest.com/d71f05b7f0842f09bdd1e92596f912bd_bank-clipart-bank-clip-art-2-bank-clipart_468-594.png'} />
      <h3 className='creditsAvailable'>Credits $$</h3>
    </div>
  }
}

export default Bank
