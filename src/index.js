import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Note from './Note';
import Store from './Store';
import NoteViewList from './NoteViewList';
import './index.css';


ReactDOM.render(
  <BrowserRouter>
    <NoteViewList store={Store} />
  </BrowserRouter>,
  document.getElementById('root'));