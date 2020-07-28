import React from 'react';
import { render } from '@testing-library/react';
import NoteViewList from './NoteViewList'
import App from './App';
import ReactDOM from 'react-dom';


//smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoteViewList />, div);
  ReactDOM.unmountComponentAtNode(div);
});