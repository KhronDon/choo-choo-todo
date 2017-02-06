import React, { Component } from 'react'
import { Link } from 'react-router'
import homeIcon from '../Images/home_4.png'
import { graphql } from 'react-apollo'
import checkIcon from '../images/Train_check.png'

import { queryFamily } from '../graphql'

@graphql(...queryFamily({
  options: props => ({ variables: { id: props.params.id } })
}))
class ParentScreen extends Component {

  familyHeader () {
    if (this.props.queryFamily.loading) return '...'
    console.log(this.props.queryFamily)
    return this.props.queryFamily.Family.name
  }

  render () {
    return <div>
      <header className='mainHeader'>
        <h2>{ this.familyHeader() }</h2>
      </header>
      <section className='home'>
        <Link to='/'>
          <img src={homeIcon} height='55px' width='55px' />
        </Link>
      </section>
      <section className='choresPendingApproval'>
        <Link to='/chores'>
          <img src={checkIcon} height='50px' widht='50px' />
        </Link>
      </section>
      <div className='addChore'>
        <h1 className='addChoreHeader'>Add Chore</h1>
        <ul>
          <li>Child Select</li>
          <li>
            <form>
              <label>
                <input className='choreInput' placeholder='Chore Input' type='text' name='chore' />
              </label>
            </form>
          </li>
          <li className='creditsLabel'>Credits</li>
          <li>
            <form>
              <label>
                <input className='creditInput' type='number' name='credits' />
              </label>
            </form>
          </li>
          <li className='newChoreSubmit'>
            <button>
              Submit
            </button>
          </li>
        </ul>
      </div>
      <section className='addRemoveChild'>
        <button>
          <Link to='/addremove'>Add Child</Link>
        </button>
      </section>
    </div>
  }
}

export default ParentScreen
