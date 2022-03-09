import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Followers from '../Followers';

const MockedFollowers = () => (
  <BrowserRouter>
    <Followers />
  </BrowserRouter>
)


describe('Followers', () => {
  test('should display a header with "Followers" as a content', () => {
    render(<MockedFollowers />)
    const header = screen.getByRole('heading', { name: /Followers/i })

    expect(header).toBeInTheDocument()
  })

  test('should display 5 followers', async () => {
    render(<MockedFollowers />)
    const followers = await screen.findAllByTestId(/follower-item-/i)

    expect(followers).toHaveLength(5)
  })

  test('should display a link to go back to the home page', async () => {
    render(<MockedFollowers />)
    const link = await screen.findByText(/Go Back/i)

    expect(link).toBeInTheDocument()
  })
})