import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/snacks')
      .then(data => data.json())
      .then(data => this.setState({
        data: data
      }))
      .catch(error => console.log(error))
  }

  render() {
    const { data } = this.state;

    if (data.food) {
      return (
        <ul>
        {
          this.state.data.food.map((snack, i) => {
            console.log('snack', snack)
            return <li key={i}>{snack.item}</li>;
          })
        }
        </ul>
      )     
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Here is my front-end-app</p>
            <p>{this.state.data[0]}</p>

          </header>
        </div>
      );
    }
  }
}

export default App;
