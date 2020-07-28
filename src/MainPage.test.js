import React from 'react';
import { render } from '@testing-library/react';
import MainPage from './MainPage';
import App from './App';
import ReactDOM from 'react-dom';


//smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});