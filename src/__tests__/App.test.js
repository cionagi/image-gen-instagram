import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

const sum = (a, b) => {
  return a + b;
};

describe('App', () => {
  it('renders welcome message', () => {
    const { getByText } = render(<App />);
    expect(getByText('Welcome Image generator instagram')).toBeInTheDocument();
  });
  it('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(2, 2)).toEqual(4);
  });
  test('Link renders correctly', () => {
    const rerender = render(<App />);
    expect(rerender).toMatchSnapshot();
  });
});
