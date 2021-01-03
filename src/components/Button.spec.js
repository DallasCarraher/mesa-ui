import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  test('renders', () => {
    render(<Button>Button</Button>)
    const ourButton = screen.getByRole('button', { name: 'Button' })
    expect(ourButton).toBeInTheDocument()
  })

  test('onClick', () => {
    const clickHandler = jest.fn()
    render(<Button text="Button" onClick={clickHandler} />)
    userEvent.click(screen.getByRole('button', { name: 'Button' }))
    expect(clickHandler).toHaveBeenCalled()
  })
})
