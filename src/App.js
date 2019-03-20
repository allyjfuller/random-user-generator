import React, { Component } from 'react';

import './App.css';
import RandomUser from './components/random-user';

class App extends Component {

  // set up state
  constructor() {
    super()

    this.state = {
      user: []
    }
  }

  fetchDataFromApi() {
    const url = 'https://randomuser.me/api/'
    
    // https://randomuser.me/api/

    //write the AJAX
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ user: data.results }))
    .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="App">
       <button onClick={() => this.fetchDataFromApi() }>Get random user</button>
       <RandomUser user={this.state.user} />
      </div>
    );
  }
}

export default App;
