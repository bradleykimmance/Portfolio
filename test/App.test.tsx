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

  it('renders the PSP Orchestrator project with demo and source links', async () => {
    await act(async () => {
      render(<App />);
    });
    expect(screen.getByRole('link', { name: /live demo/iu })).toHaveAttribute(
      'href',
      'https://payments.bradleykimmance.dev/',
    );
    expect(
      screen.getByRole('link', { name: /source on github/iu }),
    ).toHaveAttribute(
      'href',
      'https://github.com/bradleykimmance/psp-orchestrator',
    );
  });

  it('renders the contact section with an email link', async () => {
    await act(async () => {
      render(<App />);
    });
    const emailLink = screen.getByRole('link', { name: /email me/iu });
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:bradleykimmance@hotmail.co.uk',
    );
  });
});
