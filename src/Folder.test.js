import React from 'react';
import { render } from '@testing-library/react';
import Folder from './Folder';
import App from './App';
import ReactDOM from 'react-dom';


//smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Folder />, div);
  ReactDOM.unmountComponentAtNode(div);
});