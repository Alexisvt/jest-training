import { screen, waitFor } from '@testing-library/react';

import { rest, server } from '../../../utils/testServer';
import { renderWithRouter } from '../../../utils/testUtils';
import FollowersList from '../FollowersList';


describe('FollowerList', () => {
  test('should show "No followers found." when no followers are found', async () => {
    server.use(
      rest.get('https://randomuser.me/api/', (_, res, ctx) => {
        return res(ctx.status(200), ctx.json({ results: [] }))
      })
    );
    renderWithRouter(<FollowersList />)

    await waitFor(() => expect(screen.getByText(/No followers found/i)).toBeInTheDocument())
  })

  test('should display a follower', async () => {
    renderWithRouter(<FollowersList />)

    const followerImage = await screen.findByAltText(/aiza profile/i)
    const followerName = screen.getByRole('heading', { name: /aiza/i })
    const followerLastName = screen.getByRole('heading', { name: /hjelde/i })
    const followerUsername = screen.getByText(/organicdog404/i)


    expect(followerImage).toHaveAttribute('src', 'https://randomuser.me/api/portraits/women/28.jpg')
    expect(followerName).toBeInTheDocument()
    expect(followerLastName).toBeInTheDocument()
    expect(followerUsername).toBeInTheDocument()

  })

  test('should display 2 followers', async () => {
    renderWithRouter(<FollowersList />)

    const followersItem = await screen.findAllByTestId(/follower-item/i)

    expect(followersItem).toHaveLength(5)
  })
})