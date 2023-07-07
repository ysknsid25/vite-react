import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from '../App';

test('renders h1 text', () => {
    render(<App />);
    const headerElement = screen.getByText("Vite + React");
    expect(headerElement).toBeInTheDocument();
});