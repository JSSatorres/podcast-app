import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PodcastsList from './PodcastsList'

jest.mock('../../hook/useGetAllPodcast', () => () => [
  { id: 1, name: 'Podcast 1', author: 'Author 1' },
  { id: 2, name: 'Podcast 2', author: 'Author 2' },
  { id: 3, name: 'Podcast 3', author: 'Author 3' }
])

describe('PodcastsList', () => {
  it('renders the list of podcasts', async () => {
    render(
      <MemoryRouter>
        <PodcastsList />
      </MemoryRouter>
    )
    await waitFor(() => {
      expect(screen.getByText('Podcast 1')).toBeInTheDocument()
    })
    await waitFor(() => {
      expect(screen.getByText('Podcast 2')).toBeInTheDocument()
    })
    await waitFor(() => {
      expect(screen.getByText('Podcast 3')).toBeInTheDocument()
    })
  })
})
