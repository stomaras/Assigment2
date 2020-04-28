import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
            <li>Create an input field (in App Component) with a change listener which outputs the length of the entered text below for example in a paragraph </li>
            <li>Create a new component(=>ValidationComponent)which receives the text length as a prop</li>
            <li>Inside the ValidationComponent, either output "Text too short" or "Text Long enough" depending on the text length(for example take 5 as minimum length)</li>
        
        </ol>
      </div>
    );
  }
}

export default App;
