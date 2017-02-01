import React, { Component } from 'react'
import { Link } from 'react-router'

class ChoreList extends Component {

  render () {
    return <div>
      <button className='home'>
        <Link to='/'>Home</Link>
      </button>
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
