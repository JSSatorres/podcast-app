import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './Header'
import { useLoadingContextState } from '../../hook/useLoadingContextState'

jest.mock('../../hook/useLoadingContextState', () => ({
  useLoadingContextState: jest.fn()
}))

const renderElement = props => {
  const utils = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )
  const query = {
    titleLink: () => screen.getByText('Podcaster'),
    loadingCircle: () => screen.queryByTestId('loading-circle')
  }

  return {
    ...utils,
    query
  }
}
describe('Header Component', () => {
  beforeEach(() => jest.clearAllMocks())
  it('should render without crashes', async () => {
    useLoadingContextState.mockReturnValue({ isLoading: false })
    const { query } = renderElement()
    expect(query.titleLink()).toBeInTheDocument()
  })

  it('should show loading circle when isLoading is true', async () => {
    useLoadingContextState.mockReturnValue({ isLoading: true })
    const { query } = renderElement()

    await waitFor(() => {
      expect(query.loadingCircle()).toBeInTheDocument()
    })
  })

  it('should hide loading circle when isLoading is false', async () => {
    useLoadingContextState.mockReturnValue({ isLoading: false })
    const { query } = renderElement()

    await waitFor(() => {
      expect(query.loadingCircle()).toBeNull()
    })
  })
})
