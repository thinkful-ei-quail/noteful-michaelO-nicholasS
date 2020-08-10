import React from 'react';
import Note from './Note';
import { Link } from 'react-router-dom'

export default class FolderView extends React.Component {
  static defaultProps = {
    noteInfo: []
  }

  render() {
    const { notes, folderId } = this.props
    const notesFiltered = folderId ? notes.filter(note => note.folderId === folderId) : notes;
    return (
      <section className="NoteViewList">
        {notesFiltered.map(note =>
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