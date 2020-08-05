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
        const { store, routerProps } = this.props
        let folderId;
        if (routerProps){
            const { match } = routerProps;
            const {params} = match;
            folderId = params.folderId;
        }
        
        console.log('Main Page', this.props);
        return (
            <section className="MainPage">
                 <Sidebar folders={store.folders} />
                 <NoteViewList notes={store.notes} folderId={folderId}/>
            </section>
        );
    }
}


export default MainPage;