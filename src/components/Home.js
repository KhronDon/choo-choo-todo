import React, { Component } from 'react'
import { Link } from 'react-router'
import { graphql } from 'react-apollo'
import withAuth from '../utils/withAuth'

import UserOwnedFamilies from '../graphql/query/UserOwnedFamilies.gql'

// @withAuth
@graphql(UserOwnedFamilies, {name: 'userOwnedFamilies'})
class Home extends Component {

  families () {
    if (this.props.userOwnedFamilies.loading) return <li>loading</li>
    return this.props.userOwnedFamilies.user.ownedFamilies.map((family, i) => {
      return <li key={i}>{family.name} </li>
    })
  }

  render () {
    return <div>
      <h2>Group Name</h2>
      <ul className='users'>
        {this.families()}
        <li>
          <table className='parentList'>
            <thead>Parent(s)</thead>
            <tbody>
              <tr>
                <td>
                  <img src={'https://image.freepik.com/free-icon/emoticon-square-smiling-face-with-closed-eyes_318-58597.jpg'} height='50px' width='50px' />
                </td>
                <td>
                  <button>
                    <Link to='/parentScreen'>Parent Name</Link>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <table className='chidList'>
            <thead>Child(ren)</thead>
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
      </ul>
    </div>
  }
}

export default Home
