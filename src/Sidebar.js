import React from 'react';
import './Header.css';
import Folder from './Folder'
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
  render() {
    const {folders} = this.props
    console.log(folders)
    return (
      <section className="sidebar">
      <ul>
      
      {folders.map(folder => (
    <Link to={'/folder/' + folder.id}>
       <Folder
        key={folder.id}
        name={folder.name}
        id={folder.id}
        />
        </Link> 
      ))}
        </ul>
      </section>
    );
  }
}


export default Sidebar;
