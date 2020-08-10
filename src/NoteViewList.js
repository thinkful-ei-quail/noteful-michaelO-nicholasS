import React from 'react';
import Note from './Note';
import './NoteViewList.css';
import { Link } from 'react-router-dom'

class NoteViewList extends React.Component {
    static defaultProps = {
        noteInfo: []
    }

    render() {
        const { notes, folderId } = this.props
        const notesFiltered = folderId ? notes.filter(note => note.folderId === folderId) : notes;
        return (
            <section className="NoteViewList">
                {notesFiltered.map(note =>
                    <Link to={'/folder/' + note.id} key={note.id}>  
                   
                    
                            <div>{note.name}</div>
                            <div>{note.modified}</div>
                     
                    </Link>
                )}
                
            </section>

        );
    }
}


export default NoteViewList;