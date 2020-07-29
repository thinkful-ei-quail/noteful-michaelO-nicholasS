import React from 'react';
// import Header from './Header';
// import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Note from './Note';
import './NoteViewList.css';
import { Link } from 'react-router-dom'

class NoteViewList extends React.Component {
    static defaultProps = {
        noteInfo: []
    }

    render() {
        const { notes } = this.props
        return (
            <section className="NoteViewList">
                {notes.map(note =>
                    <Link to={'/folder/' + note.id}>  
                    <Note
                        key={note.id}
                        name={note.name}
                        modified={note.modified}
                        folderId={note.folderId}
                        content={note.content}
                    />
                    </Link>
                )}
                
            </section>

        );
    }
}


export default NoteViewList;