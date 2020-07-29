import React from 'react';
import Header from './Header';
// import { Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './Note.css';

class Note extends React.Component {
    render() {

        return (
            <div className='SingleNote'>{this.props.name}
                <div>
                    {this.props.modified}
                </div>
            </div>
            

        );
    }
}

export default Note;
