import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import withAuth from '../utils/withAuth'
import ui from '../ui'

// import { Link } from 'react-router'
// import homeIcon from '../Images/home_4.png'

import {
  mutationCreateInvitation,
  queryUserFamilies
} from '../graphql'

@withAuth
@graphql(...mutationCreateInvitation())
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
    this.props.mutationCreateInvitation({
      variables: {
        familyId: this.props.id,
        name: this.state.newMemberName,
        email: this.state.newMemberEmail
      },
      refetchQueries: [{ query: queryUserFamilies(false), variables: { email: this.props.auth.profile.email } }]
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
