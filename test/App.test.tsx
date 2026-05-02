import App from '../src/App';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('App', () => {
  it('renders the portfolio title', () => {
    render(<App />);
    expect(screen.getAllByText(/devportfolio/iu).length).toBeGreaterThan(0);
  });

  it('renders the hero section with specialization', () => {
    render(<App />);
    expect(screen.getByText(/payment solutions/iu)).toBeDefined();
    expect(screen.getByText(/event-driven architecture/iu)).toBeDefined();
  });
});
