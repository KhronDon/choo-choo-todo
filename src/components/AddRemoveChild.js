import React, { Component } from 'react'
import { Link } from 'react-router'

class AddRemoveChild extends Component {

  render () {
    return <div>
      <h1 className='mainHeader'>Add Child</h1>
      <section className='home'>
        <button>
          <Link to='/home'>Go Home</Link>
        </button>
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
