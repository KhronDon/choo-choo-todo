import React, { Component } from 'react'
import { Link } from 'react-router'
import homeIcon from '../images/home_4.png'

class ChoreList extends Component {

  render () {
    return <div>
      <section className='home'>
        <Link to='/'>
          <img src={homeIcon} height='55px' width='55px' />
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
        <button className='submitCompletedChoresButton'>Submit</button>
      </section>
    </div>
  }
}

export default ChoreList
