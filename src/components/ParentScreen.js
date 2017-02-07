import React, { Component } from 'react'
import { Link } from 'react-router'
import homeIcon from '../Images/home_4.png'
import { graphql } from 'react-apollo'
import checkIcon from '../images/Train_check.png'

import { queryFamily, mutationCreateChore } from '../graphql'

@graphql(...queryFamily({
  options: props => ({ variables: { id: props.params.id } })
}))
@graphql(...mutationCreateChore())
class ParentScreen extends Component {

  familyHeader () {
    if (this.props.queryFamily.loading) return '...'
    console.log(this.props.queryFamily)
    return this.props.queryFamily.Family.name
  }

  _submit = (event) => {
    event.preventDefault()
    this.props.mutationCreateChore({
      variables: {
        kidId: this.refs.kidId.value,
        description: this.refs.description.value,
        worth: Number(this.refs.worth.value)
      },
      refetchQueries: [{
        query: queryFamily(false),
        variables: { id: this.props.params.id }
      }]
    })
  }

  get kidOptions () {
    const { loading, Family } = this.props.queryFamily
    if (loading) return null
    return Family.kids.map((kid, i) => {
      return <option key={i} value={kid.id}>{kid.name}</option>
    })
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
          <li>
            <select ref='kidId'>
              {this.kidOptions}
            </select>
          </li>
          <li>
            <form>
              <label>
                <input className='choreInput' placeholder='Chore Input' type='text' ref='description' />
              </label>
            </form>
          </li>
          <li className='creditsLabel'>Credits</li>
          <li>
            <form>
              <label>
                <input className='creditInput' type='number' ref='worth' />
              </label>
            </form>
          </li>
          <li className='newChoreSubmit'>
            <button onClick={this._submit}>
              Submit
            </button>
          </li>
        </ul>
      </div>
      <section className='addRemoveChild'>
        <button>
          <Link to={`/parent/${this.props.params.id}/addremove`}>Add Child</Link>
        </button>
      </section>
    </div>
  }
}

export default ParentScreen
