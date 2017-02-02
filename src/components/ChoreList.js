import React, { Component } from 'react'
import { Link } from 'react-router'
import homeIcon from '../Images/home_4.png'

class ChoreList extends Component {

  render () {
    return <div>
      <section className='home'>
        <Link to='/'>
          <img src={homeIcon} height='50px' width='50px' />
        </Link>
      </section>
      <h1 className='mainHeader'>Chore List</h1>
      <table>
        <tbody>
          <tr>
            <td className='childName'>Child</td>
            <td className='chore'>Chore</td>
            <td className='choreValue'>$$</td>
            <td>
              <input type='checkBox' value='Check' />
            </td>
          </tr>
          <tr>
            <td className='childName'>Child</td>
            <td className='chore'>Chore</td>
            <td className='choreValue'>$$</td>
            <td>
              <input type='checkBox' value='Check' />
            </td>
          </tr>
          <tr>
            <td className='childName'>Child</td>
            <td className='chore'>Chore</td>
            <td className='choreValue'>$$</td>
            <td>
              <input type='checkBox' value='Check' />
            </td>
          </tr>
        </tbody>
      </table>
      <section className='submitCompletedChores'>
        <button>Submit</button>
      </section>
    </div>
  }
}

export default ChoreList
