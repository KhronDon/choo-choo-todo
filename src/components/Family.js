import React, { Component } from 'react'
import { Link } from 'react-router'
import ui from '../ui'
import AddFamilyMember from './AddFamilyMember'

class Family extends Component {

  _addMember = () => {
    ui.displayModal(<AddFamilyMember id={this.props.id} />)
  }

  render () {
    return <li>
      <h2 className='familyHeader'>{this.props.name}</h2>
      <table className='parentList'>
        <caption><Link to={`/parent/${this.props.id}`}>Parent(s)</Link></caption>
        <tbody>
          {this.props.memberships.map((member, i) => {
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
      <button onClick={this._addMember}>Add Family Member</button>
      <table className='chidList'>
        <caption>Child(ren)</caption>
        <tbody>
          <tr>
            <td>
              <img src={'https://image.freepik.com/free-icon/emoticon-square-smiling-face-with-closed-eyes_318-58597.jpg'} height='50px' width='50px' />
            </td>
            <td>
              <button>
                <Link to='/childScreen'>Child Name</Link>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={'https://image.freepik.com/free-icon/emoticon-square-smiling-face-with-closed-eyes_318-58597.jpg'} height='50px' width='50px' />
            </td>
            <td>
              <button>
                <Link to='/childScreen'>Child Name</Link>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  }
}

export default Family
