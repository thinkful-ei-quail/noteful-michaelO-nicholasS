import React, { Component } from 'react';
import Header from './Header';
import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  static defaultPorps = {
    Store:{
      folders:[],
      notes:[]
    }
  }
  render(){
  return (
    <div className="App">
    <Header/>
    </div>
  );
}
}
export default App;
