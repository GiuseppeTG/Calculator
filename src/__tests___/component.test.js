import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/calculator';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import About from '../components/About';

describe('Test components', () => {
  it('Calculator test', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Home test', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Navbar test', () => {
    const tree = renderer.create(
      <Router>
        <Navbar />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('About test', () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Simulating user interaction', () => {
    render(<Calculator />);
    const input = document.querySelector('.output');
    const key7 = screen.getByText('7');
    const key8 = screen.getByText('8');
    fireEvent.click(key7);
    fireEvent.click(key8);
    expect(input.textContent).toBe('78');
  });
});
