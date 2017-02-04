import React, { Component } from 'react'
import { Link } from 'react-router'
import { graphql } from 'react-apollo'
import Family from './Family'

import { queryUserOwnedFamilies } from '../graphql'

@graphql(...queryUserOwnedFamilies())
class Home extends Component {

  families () {
    if (this.props.queryUserOwnedFamilies.loading) return <li>loading</li>
    return this.props.queryUserOwnedFamilies.user.ownedFamilies.map((family, i) => {
      return <Family {...family} key={i} />
    })
  }

  render () {
    return <div>
      <ul className='users'>
        {this.families()}
      </ul>
    </div>
  }
}

export default Home
