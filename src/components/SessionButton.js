import React, { Component } from 'react'
import withAuth from '../utils/withAuth'

@withAuth
class SessionButton extends Component {

  handleClick = () => {
    const { auth } = this.props
    auth.isSignedIn
      ? auth.signOut()
      : auth.signIn()
  }

  render () {
    const { auth } = this.props
    return <div className='sessionFooter'>
      <section className='sessionBtn'>
        <button className='signInButton' onClick={this.handleClick}>
          {auth.isSignedIn ? 'Sign Out' : 'Sign In'}
        </button>
      </section>
    </div>
  }
}

export default SessionButton
