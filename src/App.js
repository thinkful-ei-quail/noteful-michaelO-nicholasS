import React, { Component } from 'react';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import NoteView from './NoteView';


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
      <Switch>
            <Route exact path='/' render={routerProps => <MainPage store={store} {...routerProps} />} />

            {/* <Route path='/folder/:folderId' render={routerProps => <MainPage store={store} routerProps={routerProps} />} /> */}

            {/* Add note view route here */}
            <Route path='/notes/:id' render={routerProps => <NoteView notes={store.notes} routerProps={routerProps} />} />

      </Switch>
        
        
        {/* <Route path='/Sidebar' render={() =>
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
        ))} */}
        
      </main>
        
      </div>
    );
  }
}
export default App;
