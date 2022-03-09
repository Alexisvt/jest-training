import { screen } from '@testing-library/react';

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
})