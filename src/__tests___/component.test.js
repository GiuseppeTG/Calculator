import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
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
});
