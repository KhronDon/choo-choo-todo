import React, { Component } from 'react'
import SessionButton from './SessionButton'

import Modal from './Modal'

class Layout extends Component {

  render () {
    return <div>
      {this.props.children}
      <SessionButton />
      <Modal />
    </div>
  }
}

export default Layout
