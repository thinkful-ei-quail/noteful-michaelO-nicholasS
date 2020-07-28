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
    return (
      <section className="NoteViewList">
        <h2>{this.props.noteInfo.modified}</h2>
      </section>
    );
  }
}


export default NoteViewList;