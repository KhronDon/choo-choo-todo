import React, { Component } from 'react'
// import { Link } from 'react-router'
import { graphql } from 'react-apollo'
import Family from './Family'
import withAuth from '../utils/withAuth'

import { queryUserFamilies } from '../graphql'

@withAuth
@graphql(...queryUserFamilies({
  options: props => ({ variables: { email: props.auth.profile.email } })
}))
class Families extends Component {

  families () {
    const { loading, user } = this.props.queryUserFamilies
    if (loading) return <li>loading</li>
    console.log(this.props.queryUserFamilies)
    return user.families.map((family, i) => {
      return <Family {...family} user={user} key={i} />
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

export default Families
