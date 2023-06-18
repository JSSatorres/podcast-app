import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'
import { LoadingContext } from '../../context/LoadingContext'

describe('Header', () => {
  it('renders the header with the title', () => {
    render(
      <MemoryRouter>
        <LoadingContext.Provider value={{ isLoading: false }}>
          <Header />
        </LoadingContext.Provider>
      </MemoryRouter>
    )

    const titleLink = screen.getByText('Podcaster')
    expect(titleLink).toBeInTheDocument()
    expect(titleLink.getAttribute('href')).toBe('/')
  })

  it('renders the loading circle when isLoading is true', () => {
    render(
      <MemoryRouter>
        <LoadingContext.Provider value={{ isLoading: true }}>
          <Header />
        </LoadingContext.Provider>
      </MemoryRouter>
    )

    const loadingCircle = screen.getByTestId('loading-circle')
    expect(loadingCircle).toBeInTheDocument()
  })

  it('does not render the loading circle when isLoading is false', () => {
    render(
      <MemoryRouter>
        <LoadingContext.Provider value={{ isLoading: false }}>
          <Header />
        </LoadingContext.Provider>
      </MemoryRouter>
    )

    const loadingCircle = screen.queryByTestId('loading-circle')
    expect(loadingCircle).toBeNull()
  })
})
