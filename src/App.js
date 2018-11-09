import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React poker

          </a>
        </header>
        <div class="main">
  <div class="table">
    <div class="board">
      <div class="card-small">
        <p class="card-text black">A</p>
        <p class="card-img black">&clubs;</p>
      </div>
      <div class="card-small">
        <p class="card-text black">10</p>
        <p class="card-img black">&spades;</p>
      </div>
      <div class="card-small">
        <p class="card-text red">K</p>
        <p class="card-img red">&hearts;</p>
      </div>
      <div class="card-small">
        <p class="card-text red">Q</p>
        <p class="card-img red">&diams;</p>
      </div>
      <div class="card-small">
        <p class="card-text red">2</p>
        <p class="card-img red">&diams;</p>
      </div>
    </div>
  </div>
</div>

      </div>
    );
  }
}

export default App;
