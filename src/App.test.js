import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Electric Vehicle Demo App/i);
  expect(headerElement).toBeInTheDocument();
});
