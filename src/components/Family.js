import React, { Component } from 'react'
import { Link } from 'react-router'

class Family extends Component {

  render () {
    return <li>
      <h2>{this.props.name}</h2>
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
  }
}

export default Family
