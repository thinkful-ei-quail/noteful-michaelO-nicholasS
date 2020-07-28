import React from 'react';
import './Header.css';
import Folder from './Folder'

class Sidebar extends React.Component {
  render() {
    const {folders} = this.props
    console.log(folders)
    return (
      <section className="sidebar">
      <ul>
      {folders.map(folder => (
       <Folder
        key={folder.id}
        name={folder.name}/> 
      ))}
        </ul>
      </section>
    );
  }
}


export default Sidebar;
