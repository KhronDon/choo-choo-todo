import React, { Component } from 'react'
import SessionButton from './SessionButton'

class Layout extends Component {

  render () {
    return <div>
      {this.props.children}
      <SessionButton />
    </div>
  }
}

export default Layout
