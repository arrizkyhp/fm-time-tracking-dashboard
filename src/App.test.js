import { render, screen } from '@testing-library/react';
import App from './App';

test('renders report for text', () => {
  render(<App />);
  const linkElement = screen.getByText(/report for/i);
  expect(linkElement).toBeInTheDocument();
});
