import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { graphql } from 'react-apollo'
import Family from './Family'
import withAuth from '../utils/withAuth'

import {
  queryUserFamilies,
  mutationAcceptInvitation
 } from '../graphql'

@withAuth
@graphql(...mutationAcceptInvitation())
@graphql(...queryUserFamilies({
  options: props => ({ variables: { email: props.auth.profile.email } })
}))
class Families extends Component {

  families () {
    const { loading, user } = this.props.queryUserFamilies
    if (loading) return <li>loading</li>
    return user.families.map((family, i) => {
      return <Family {...family} user={user} key={i} />
    })
  }

  componentWillReceiveProps (nextProps) {
    const { loading, user, allInvitations } = this.props.queryUserFamilies
    if (!loading) {
      if (allInvitations.length === 0 && user.families.length === 0) {
        browserHistory.push('/group')
      } else {
        console.log(user, allInvitations)
        allInvitations.forEach((invitation) => {
          this.props.mutationAcceptInvitation({
            variables: {
              userId: this.props.client.userId,
              invitationId: invitation.id,
              familyId: invitation.family.id
            },
            refetchQueries: [
              { query: queryUserFamilies(false),
                variables: {
                  email: nextProps.auth.profile.email
                } }
            ]
          })
        })
      }
    }
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
