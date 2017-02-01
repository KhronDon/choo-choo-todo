import React, { Component } from 'react'
import { Link } from 'react-router'

class ParentScreen extends Component {

  render () {
    return <div>
      <header className='parentHeader'>
        <h2>Parent Name</h2>
        <button className='home'>
          <Link to='/home'>Home</Link>
        </button>
        <button className='choresPendingApproval'>
          <Link to='/chores'>Chore Approval</Link>
        </button>
      </header>
      <div className='addChore'>
        <h1>Add Chore</h1>
        <ul>
          <li>Child Select</li>
          <li>
            <form>
              <label>
                Chore:
                <input className='choreInput' type='text' name='chore' />
              </label>
            </form>
          </li>
          <li>
            <form>
              <label>
                Credit:
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
