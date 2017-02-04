import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import withAuth from '../utils/withAuth'

import { mutationCreateFamily, queryUserOwnedFamilies } from '../graphql'

@withRouter
@withAuth
@graphql(...queryUserOwnedFamilies())
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
      refetchQueries: [{query: queryUserOwnedFamilies(false)}]
    }).then(() => {
      this.props.router.push('/')
    })
    console.log('creating a family')
  }

  _newFamilyNameChange = (e) => {
    this.setState({ newFamilyName: e.target.value })
  }

  families () {
    if (this.props.queryUserOwnedFamilies.loading) return <li>loading</li>
    return this.props.queryUserOwnedFamilies.user.ownedFamilies.map((family, i) => {
      return <li key={i}>{family.name} </li>
    })
  }

  render () {
    return <div>
      <ul>
        {this.families()}
      </ul>
      <hr />
      <form onSubmit={this._createFamily}>
        <input
          type='text'
          value={this.state.newFamilyName}
          onChange={this._newFamilyNameChange}
        />
        <button>Create Family</button>
      </form>
    </div>
  }
}

export default GroupSelection
