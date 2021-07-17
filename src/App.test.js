import { render, screen } from '@testing-library/react';
import App from './App';
import SamuraiJSApp from "./App";
import * as ReactDOM from "react-dom";

/*test('renders learn react link', () => {
  render(<SamuraiJSApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/


it('render whithout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
