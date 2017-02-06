import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import ui from '../ui'

// import { Link } from 'react-router'
// import homeIcon from '../Images/home_4.png'

import {
  mutationCreateMembership,
  queryUserOwnedFamilies
} from '../graphql'

@graphql(...mutationCreateMembership())
class AddFamilyMember extends Component {

  state = {
    newMemberName: '',
    newMemberEmail: ''
  }

  _changed = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  _addMember = (event) => {
    event.preventDefault()
    this.props.mutationCreateMembership({
      variables: {
        familyId: this.props.id,
        name: this.state.newMemberName,
        email: this.state.newMemberEmail
      },
      refetchQueries: [{ query: queryUserOwnedFamilies(false) }]
    }).then(() => {
      ui.dismissModal()
    })
  }

  render () {
    return <div className='addFamilyMember'>
      <h3>Add a Family Member</h3>
      <form onSubmit={this._addMember}>
        <input
          type='text'
          value={this.state.newMemberName}
          name='newMemberName'
          onChange={this._changed}
          placeholder='Name'
        />
        <input
          type='text'
          value={this.state.newMemberEmail}
          name='newMemberEmail'
          onChange={this._changed}
          placeholder='Email Address'
        />
        <button type='submit' className='addMemberSubmitButton'>Add</button>
      </form>
    </div>
  }
}

export default AddFamilyMember
