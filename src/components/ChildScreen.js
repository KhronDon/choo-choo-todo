import React, { Component } from 'react'
import { Link } from 'react-router'

class ChildScreen extends Component {

  render () {
    return <div>
      <header className='childHeader'>
        <h2>Child Name</h2>
        <button className='choresRemaining'>Chores Remaining</button>
        <button className='credits'>
          <Link to='/bank'>$$</Link>
        </button>
      </header>
      <h3 className='choreListHeader'>Chores</h3>
      <section className='choreList'>
        <table>
          <tbody>
            <tr>
              <td>
                <input type='checkBox' value='Check' />
              </td>
              <td className='chore'>Chore</td>
              <td className='choreValue'>$$</td>
            </tr>
            <tr>
              <td>
                <input type='checkBox' value='Check' />
              </td>
              <td className='chore'>Chore 2</td>
              <td className='choreValue'>$$</td>
            </tr>
            <tr>
              <td>
                <input type='checkBox' value='Check' />
              </td>
              <td className='chore'>Chore 3</td>
              <td className='choreValue'>$$</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  }
}

export default ChildScreen
