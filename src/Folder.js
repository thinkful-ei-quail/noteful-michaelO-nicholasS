import React from 'react';
import Header from './Header';
// import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './App.css';

function Folder(props) {
  return (
    <li className="App">
      <button>{props.name}</button>    
    </li>
  );
}

export default Folder;
