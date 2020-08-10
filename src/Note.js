import React from 'react';
import './Note.css';

class Note extends React.Component {
    render() {

        return (
            <div className='SingleNote'>
            {this.props.name}
                <div>
                    {this.props.modified}
                    {this.props.content}
                </div>
            </div>
            

        );
    }
}

export default Note;
