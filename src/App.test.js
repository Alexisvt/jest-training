import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  test('should redirect to Followers page when clicked the link and update the DOM', async () => {
    render(<BrowserRouter>
      <App />
    </BrowserRouter>)

    const followersLink = await screen.findByText(/Followers/);
    const leftClick = { button: 0 };
    userEvent.click(followersLink, leftClick);

    expect(await screen.findByRole('heading', { name: /Followers/ })).toBeInTheDocument();
  })

  test('should redirect to Home page when clicked the link and update the DOM', async () => {
    window.history.pushState({}, '', '/followers');
    render(<BrowserRouter>
      <App />
    </BrowserRouter>)

    const homeLink = await screen.findByText(/Go Back/);
    const leftClick = { button: 0 };
    userEvent.click(homeLink, leftClick);

    expect(await screen.findByRole('heading', { name: /Todo/ })).toBeInTheDocument();
  })
})