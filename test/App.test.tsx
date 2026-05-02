import App from '../src/App';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import { describe, expect, it } from 'vitest';

describe('App', () => {
  it('renders the portfolio title', async () => {
    await act(async () => {
      render(<App />);
    });
    expect(screen.getAllByText(/Bradley Kimmance/iu).length).toBeGreaterThan(0);
  });
});
