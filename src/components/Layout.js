import React, { Component } from 'react'
import SessionButton from './SessionButton'
import Background from './Background'

import Modal from './Modal'

class Layout extends Component {

  render () {
    return <div className='layout'>
      <main>
        {this.props.children}
      </main>
      <footer>
        <SessionButton />
      </footer>
      <Modal />
      <Background />
    </div>
  }
}

export default Layout
