import React from 'react';
import User from './components/User';
import Follower from './components/Follower';
// import axios from 'axios';
import './App.css';

class App extends React.Component {

  render() {
    return (
    <div>
      <h1>Github User Card</h1>
      <User />
      <Follower />
    </div>
    );
  }
}

export default App;
