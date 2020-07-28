import React, { Component } from 'react';
import Header from './Header';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css';
import NoteViewList from './NoteViewList';
import Store from './Store';
import MainPage from './MainPage';
import Sidebar from './Sidebar';
import Folder from './Folder';

class App extends Component {
 
  static defaultProps = {
    Store: {
      folders: [],
      notes: []
    }
  }
  
  render() {
    const {store} = this.props
    console.log(store)
    
    return (
      <div>
        <header>
          <Header />
        </header>
        
      <main>
        <Route path='/' render={() => 
        <MainPage store={store}/>}/>
        <Route path='/Sidebar' render={() =>
        <Sidebar key={store.folder.id}/>}/>
        {store.folders.map(folder =>(   
        <Link
         to={'/folder/'+folder.id}>
          <Folder
          key={folder.id}
          name={folder.name}
          id={folder.id}
          />
        </Link>
        ))}
        
      </main>
        
      </div>
    );
  }
}
export default App;
