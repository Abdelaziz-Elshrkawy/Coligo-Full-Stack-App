import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('check Login button', () => {
    render(<App />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
});
