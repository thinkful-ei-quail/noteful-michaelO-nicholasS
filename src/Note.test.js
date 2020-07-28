import React from 'react';
import { render } from '@testing-library/react';
import Note from './Note';
import App from './App';
import ReactDOM from 'react-dom';


//smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Note />, div);
  ReactDOM.unmountComponentAtNode(div);
});