import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { renderWithRouter } from '../../../utils/testUtils';
import Followers from '../Followers';


describe('Followers', () => {
  test('should display a header with "Followers" as a content', () => {
    renderWithRouter(<Followers />)
    const header = screen.getByRole('heading', { name: /Followers/i })

    expect(header).toBeInTheDocument()
  })

  test('should display 5 followers', async () => {
    renderWithRouter(<Followers />)
    const followers = await screen.findAllByTestId(/follower-item-/i)

    expect(followers).toHaveLength(5)
  })

  test('should display a link to go back to the home page', async () => {
    renderWithRouter(<Followers />)
    const link = await screen.findByText(/Go Back/i)

    expect(link).toBeInTheDocument()
  })

  test('should redirect and update history to the home page when the user clicks "Go Back" link', async () => {
    const history = createMemoryHistory();

    render(<Router history={history}><Followers /></Router>);
    const link = await screen.findByText(/Go Back/i)

    const leftClick = { button: 0 }
    userEvent.click(link, leftClick)

    expect(history.location.pathname).toBe('/')
  })
})