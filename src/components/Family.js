import React, { Component } from 'react'
import { Link } from 'react-router'
import ui from '../ui'
import AddFamilyMember from './AddFamilyMember'

class Family extends Component {

  _addMember = () => {
    ui.displayModal(<AddFamilyMember id={this.props.id} />)
  }

  invitations () {
    const iOwnThisFamily = this.props.owner.id === this.props.user.id
    if (iOwnThisFamily) {
      return <div>
        <table className='parentList'>
          <tbody>
            {this.props.invitations.map((member, i) => {
              return <tr key={i}>
                <td className='memberName'>
                  {member.name}
                </td>
                <td className='memberEmail'>
                  {member.email}
                </td>
              </tr>
            })}
          </tbody>
        </table>
        <div className='controls'>
          <button className='addFamilyMemberButton' onClick={this._addMember}>Add Family Member</button>
        </div>
      </div>
    } else {
      return null
    }
  }

  render () {
    return <li>
      <h2 className='familyHeader'>{this.props.name}</h2>
      <div className='grownUpBtn'>
        <button><Link to={`/parent/${this.props.id}`}>Grown Ups</Link></button>
      </div>
      {this.invitations()}
      <table className='childList'>
        <caption>Kids</caption>
        <li className='kidNameHeader'>Kids</li>
        <tbody>
          <tr className='childNameBtn'>
            <button>
              <Link to='/childScreen'>Child Name</Link>
            </button>
          </tr>
          <tr className='childNameBtn'>
            <button>
              <Link to='/childScreen'>Child Name</Link>
            </button>
          </tr>
        </tbody>
      </table>
    </li>
  }
}

export default Family
