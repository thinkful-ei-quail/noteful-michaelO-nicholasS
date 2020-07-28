import React from 'react';
import Header from './Header';
import { Route } from 'react-router-dom'
import Sidebar from './Sidebar'
// import { Link } from 'react-router-dom'
import './MainPage.css';

function MainPage() {
  return (
    <section className="MainPage">
    <Sidebar/>
    </section>
  );
}

export default MainPage;