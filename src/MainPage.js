import React from 'react';
import Header from './Header';
import { Route } from 'react-router-dom'
import Sidebar from './Sidebar'
// import { Link } from 'react-router-dom'
import './MainPage.css';
import Note from './Note';
import NoteViewList from './NoteViewList';

class MainPage extends React.Component {
    render() {
        const { store } = this.props
        console.log(store.folders)
        return (
            <section className="MainPage">
                 <Sidebar folders={store.folders} />
                 <NoteViewList notes={store.notes}/>
            </section>
        );
    }
}


export default MainPage;