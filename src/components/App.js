import React, { Component } from 'react'
import { Router, Route, browserHistory, Link } from 'react-router'

import AddRemoveChild from './AddRemoveChild'
import Bank from './Bank'
import ChildScreen from './ChildScreen'
import ChoreApproval from './ChoreApproval'
import ChoreList from './ChoreList'
import CreatePasscode from './CreatePasscode'
import Delivery from './Delivery'
import EnterPasscode from './EnterPasscode'
import GroupSelection from './GroupSelection'
import Home from './Home'
import LogIn from './LogIn'
import ParentScreen from './ParentScreen'
import Spend from './Spend'

class App extends Component {

  render () {
    return <div>
      <Router history={browserHistory}>
        <Route path='/addremove' component={AddRemoveChild} />
        <Route path='/spend' component={Spend} />
        <Route path='/bank' component={Bank} />
        <Route path='/childscreen' component={ChildScreen} />
        <Route path='/approval' component={ChoreApproval} />
        <Route path='/chores' component={ChoreList} />
        <Route path='/createpasscode' component={CreatePasscode} />
        <Route path='/delivery' component={Delivery} />
        <Route path='/enterpasscode' component={EnterPasscode} />
        <Route path='/group' component={GroupSelection} />
        <Route path='/' component={Home} />
        <Route path='/login' component={LogIn} />
        <Route path='/parentscreen' component={ParentScreen} />
      </Router>
    </div>
  }
}

export default App
