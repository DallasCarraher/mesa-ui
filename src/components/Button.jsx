import React from 'react'
import { string, func } from 'prop-types'

export const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}

Button.propTypes = {
  text: string,
  onClick: func,
}

Button.defaultProps = {
  text: 'Button',
  onClick: () => {},
}
