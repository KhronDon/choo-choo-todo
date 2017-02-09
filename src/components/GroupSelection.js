import React, { Component } from 'react'
import { withRouter, Link } from 'react-router'
import { graphql } from 'react-apollo'
import withAuth from '../utils/withAuth'

import { mutationCreateFamily, queryUserFamilies } from '../graphql'

@withRouter
@withAuth
@graphql(...queryUserFamilies({
  options: props => ({ variables: { email: props.auth.profile.email } })
}))
@graphql(...mutationCreateFamily())
class GroupSelection extends Component {

  state = {
    newFamilyName: ''
  }

  _createFamily = (e) => {
    e.preventDefault()
    this.props.mutationCreateFamily({
      variables: {
        ownerId: this.props.client.userId,
        name: this.state.newFamilyName
      },
      refetchQueries: [{
        query: queryUserFamilies(false),
        variables: {
          email: this.props.auth.profile.email
        }
      }]
    }).then(() => {
      this.props.router.push('/')
    })
  }

  _newFamilyNameChange = (e) => {
    this.setState({ newFamilyName: e.target.value })
  }

  families () {
    if (this.props.queryUserFamilies.loading) return <li>loading</li>
    return this.props.queryUserFamilies.user.ownedFamilies.map((family, i) => {
      return <li key={i}><Link to='/'>{family.name}</Link></li>
    })
  }

  render () {
    return <div className='groupSelection'>
      <h1>Your Families</h1>
      <ul className='familiesList'>
        {this.families()}
      </ul>
      <form onSubmit={this._createFamily}>
        <input
          type='text'
          value={this.state.newFamilyName}
          onChange={this._newFamilyNameChange}
        />
        <button className='createFamilyBtn'>Create Family</button>
      </form>
    </div>
  }
}

export default GroupSelection
