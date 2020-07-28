import React, { Component } from 'react';
import Header from './Header';
import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './App.css';
import NoteViewList from './NoteViewList';
import Store from './Store';
import MainPage from './MainPage';

class App extends Component {
  static defaultPorps = {
    Store: {
      folders: [],
      notes: []
    }
  }
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        
      <main>
      <MainPage/>
      </main>
        
      </div>
    );
  }
}
export default App;
