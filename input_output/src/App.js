import React from 'react';
import UserInput from './UserInput/Input';
import UserOutput from './UserOutput/Output';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "superMax",
    }
  }

  eventHandler = (event) => {
    this.setState (
      {userName : event.target.value}
    )
  }

  render() {

    return (
      <div className = "container">
        <UserInput changed = {this.eventHandler} value = {this.state.userName}/>
        <UserOutput name={this.state.userName} />
        <UserOutput name = "MAX"/>
      </div>
    )
  }
}
export default App;
