import React, { Component } from 'react'
import { Link } from 'react-router'
import homeIcon from '../images/home_4.png'
import bank from '../Images/Train_bank.png'
import { graphql } from 'react-apollo'

import { queryKid } from '../graphql'

@graphql(...queryKid({
  options: props => ({ variables: { id: props.params.id } })
}))

class Bank extends Component {
  kidHeader () {
    if (this.props.queryKid.loading) return '...'
    return this.props.queryKid.Kid.name
  }

  render () {
    return <div>
      <h2 className='mainHeader'>{`${this.kidHeader()}'s Bank `}</h2>
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
