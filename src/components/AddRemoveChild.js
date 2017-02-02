import React, { Component } from 'react'
import { Link } from 'react-router'
import homeIcon from '../Images/home_4.png'

class AddRemoveChild extends Component {

  render () {
    return <div>
      <h1 className='mainHeader'>Add Child</h1>
      <section className='home'>
        <Link to='/'>
          <img src={homeIcon} height='50px' width='50px' />
        </Link>
      </section>
      <form className='newChildInput'>
        <label>
          <input type='text' name='chore' />
        </label>
      </form>
      <section className='submitNewChild'>
        <button>Submit</button>
      </section>
      <section className='activeChildTable'>
        <table>
          <tr>
            <td>
              <input type='checkBox' value='Check' />
            </td>
            <td className='activeChildName'>Kid 1</td>
          </tr>
          <tr>
            <td>
              <input type='checkBox' value='Check' />
            </td>
            <td className='activeChildName'>Kid 2</td>
          </tr>
          <tr>
            <td>
              <input type='checkBox' value='Check' />
            </td>
            <td className='activeChildName'>Kid Pee</td>
          </tr>
          <tr>
            <td>
              <input type='checkBox' value='Check' />
            </td>
            <td className='activeChildName'>Kid Poo</td>
          </tr>
        </table>
      </section>
      <section className='removeSelectedChild'>
        <h4>Remove Selected Child</h4>
        <button>Trash Can</button>
      </section>
    </div>
  }
}

export default AddRemoveChild
