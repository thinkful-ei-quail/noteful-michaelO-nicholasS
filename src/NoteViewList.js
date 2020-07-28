import React from 'react';
// import Header from './Header';
// import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Note from './Note';
import './NoteViewList.css';

class NoteViewList extends React.Component {
    static defaultProps = {
        noteInfo: []
    }

    render() {
        const { notes } = this.props
        return (
            <section className="NoteViewList">
                <ul> {notes.map(note =>
                    <Note
                        key={note.id}
                        name={note.name}
                        modified={note.modified}
                        folderId={note.folderId}
                        content={note.content}
                    />
                )}
                </ul>
            </section>

        );
    }
}


export default NoteViewList;