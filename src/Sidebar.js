import React from 'react';
import './Header.css';
import Folder from './Folder'

class Sidebar extends React.Component {
  render() {
    return (
      <section className="sidebar">
        <Folder/>
      </section>
    );
  }
}


export default Sidebar;
