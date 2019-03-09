import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { Sidebar } from 'semantic-ui-react';
import Navbar from './UI/Navbar/Navbar';
import Home from './Home/Home';
import User from './User/User';
import WantAJob from './WantAJob/WantAJob.js';
import WantToHire from './WantToHire/WantToHire';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* navbar is defined in Navbar.scss*/}
        <Sidebar.Pushable className='navbar' >
          <Navbar visible={true} />
          <Sidebar.Pusher>
            <Switch>
              <Route path="/wantajob" component={WantAJob} />
              <Route path="/wanttohire" component={WantToHire} />
              <Route path="/user" component={User} />
              <Route path="/" component={Home} />
            </Switch>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;