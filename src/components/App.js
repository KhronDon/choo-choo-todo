import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { ApolloProvider } from 'react-apollo'
import withAuth from '../utils/withAuth'

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
import Layout from './Layout'
import ParentScreen from './ParentScreen'
import Spend from './Spend'

@withAuth
class App extends Component {

  requireAuth = (nextState, replace) => {
    if (!this.props.auth.isSignedIn) {
      replace({ pathname: '/' })
    }
  }

  render () {
    return <ApolloProvider client={this.props.client.apollo}>
      <Router history={browserHistory}>
        <Router path='/' component={Layout}>
          <IndexRoute component={Home} />
          <Route path='/spend' component={Spend} />
          <Route path='/kids:id/bank' component={Bank} />
          <Route path='/kids/:id' component={ChildScreen} />
          <Route path='/approval' component={ChoreApproval} />
          <Route path='/chores' component={ChoreList} />
          <Route path='/createpasscode' component={CreatePasscode} />
          <Route path='/delivery' component={Delivery} />
          <Route path='/enterpasscode' component={EnterPasscode} />
          <Route path='/group' component={GroupSelection} />
          <Route path='/login' component={LogIn} />
          <Route path='/parent/:id' component={ParentScreen} />
          <Route path='/parent/:id/addremove' component={AddRemoveChild} />
        </Router>
      </Router>
    </ApolloProvider>
  }
}

export default App
