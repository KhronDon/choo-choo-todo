import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import withAuth from '../utils/withAuth'
import update from 'immutability-helper'

import CreateFamily from '../graphql/mutation/CreateFamily.gql'

@withAuth
@graphql(CreateFamily, { name: 'createFamily' })
class GroupSelection extends Component {

  state = {
    newFamilyName: ''
  }

  _createFamily = (e) => {
    e.preventDefault()
    this.props.createFamily({
      variables: {
        ownerId: this.props.client.userId,
        name: this.state.newFamilyName
      },
      updateQueries: {
        userOwnedFamilies: (prev, {mutationResult}) => {
          const family = mutationResult.data.createFamily
          return update(prev, { user: { ownedFamilies: { $push: [family] } } })
        }
      }
    })
    console.log('creating a family')
  }

  _newFamilyNameChange = (e) => {
    this.setState({ newFamilyName: e.target.value })
  }

  render () {
    return <div>
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
