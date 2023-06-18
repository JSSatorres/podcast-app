import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Search from './Search'

describe('Search component', () => {
  test('calls handleChange function on input change', () => {
    const mockHandleChange = jest.fn()

    render(<Search handleChange={mockHandleChange} />)

    const inputElement = screen.getByPlaceholderText('Filter podcasts...')
    userEvent.type(inputElement, 'example')

    expect(mockHandleChange).toHaveBeenCalledWith('example')
  })
})
