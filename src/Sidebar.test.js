import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './Sidebar';
import ReactDOM from 'react-dom';


//smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sidebar />, div);
  ReactDOM.unmountComponentAtNode(div);
});