import React, { Component } from 'react'
import { Link } from 'react-router'
import homeIcon from '../images/home_4.png'
import trashCan from '../images/Trash_icon.png'
import { graphql } from 'react-apollo'
import { queryFamily, mutationCreateKid } from '../graphql'

@graphql(...queryFamily({
  options: props => ({ variables: { id: props.params.id } })
}))
@graphql(...mutationCreateKid())
class AddRemoveChild extends Component {

  _createKid = () => {
    this.props.mutationCreateKid({
      variables: {
        familyId: this.props.params.id,
        name: this.refs.kidName.value
      },
      refetchQueries: [{
        query: queryFamily(false),
        variables: { id: this.props.params.id }
      }]
    })
  }

  get kids () {
    const { loading, Family } = this.props.queryFamily
    if (loading) return null
    return Family.kids.map((kid, i) => {
      return <tr key={i}>
        <td>
          <input type='checkBox' value='Check' />
        </td>
        <td className='activeChildName'>{kid.name}</td>
      </tr>
    })
  }

  render () {
    return <div>
      <h1 className='mainHeader'>Add Kid</h1>
      <section className='home'>
        <Link to='/'>
          <img src={homeIcon} height='50px' width='50px' />
        </Link>
      </section>
      <form className='newChildInput'>
        <label>
          <input type='text' ref='kidName' />
        </label>
      </form>
      <section className='submitNewChild'>
        <button onClick={this._createKid}>Submit</button>
      </section>
      <section className='activeChildTable'>
        <table>
          {this.kids}
        </table>
      </section>
      <section className='removeSelectedChild'>
        <h4>Remove Selected Child</h4>
        <img src={trashCan} height='50px' width='50px' />
      </section>
    </div>
  }
}

export default AddRemoveChild
