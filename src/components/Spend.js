import React, { Component } from 'react'
import { Link } from 'react-router'

class Spend extends Component {

  render () {
    return <div>
      <h2 className='mainHeader'>Spend Credits</h2>
      <section className='homeButton'>
        <button>
          <Link to='/home'>Go Home</Link>
        </button>
      </section>
    </div>
  }
}

export default Spend
