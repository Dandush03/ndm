import React from 'react';
import { render } from '@testing-library/react';
import App from '../component/Home';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/info@ndm.com.pa/i);
  expect(linkElement).toBeInTheDocument();
});
