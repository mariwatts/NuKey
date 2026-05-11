// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NuKey title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NuKey/i);
    expect(titleElement).toBeInTheDocument();
});
