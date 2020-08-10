import React from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';
import Note from './Note';

class NoteView extends React.Component {
  render() {
    const { notes, routerProps } = this.props
    let noteId;
    if (routerProps) {
      const { match } = routerProps;
      const { params } = match;
      noteId = params.id;
    }

    const selectedNote = notes.filter(note => note.id === noteId)

    console.log('Note View', this.props);
    console.log('Selected Note', selectedNote);
    return (
      
        <section className="NoteView">
        <Link to={`/notes/${selectedNote.id}`}>
          <Note
            key={selectedNote.id}
            selectedNote={selectedNote}
          />
        </Link >
        </section>
      
    );
  }
}


export default NoteView;