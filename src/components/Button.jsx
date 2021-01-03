import React from 'react'
import styled from 'styled-components'
import { func, string, bool, oneOfType, arrayOf, element } from 'prop-types'
import { SystemColors, getColor } from '../theme/Colors'

const StyledButton = styled.button`
  background-color: ${({ color, disabled }) =>
    disabled ? SystemColors.Gray(3, 1) : getColor(color)};
  border: solid 2px;
  border-color: ${({ color, disabled }) =>
    disabled ? SystemColors.Gray(3, 1) : getColor(color)};
  border-radius: 5px;
  color: ${(props) => props.theme.text || 'white'};
  font-size: 16px;
  :hover {
    cursor: ${({ disabled }) => !disabled && 'pointer'};
    background-color: ${({ color, disabled }) =>
      disabled ? SystemColors.Gray(3, 1) : getColor(color, 0.9)};
    border-color: ${({ color, disabled }) =>
      disabled ? SystemColors.Gray(3, 1) : getColor(color, 0.9)};
  }
  :focus {
    cursor: pointer;
    background-color: ${({ color }) => getColor(color, 0.9)};
    border-color: ${(props) => props.theme.text || 'white'};
  }
  :active {
    cursor: pointer;
    border-radius: 5px;
    background-color: ${({ color }) => getColor(color, 0.7)};
    border-color: ${(props) => props.theme.text || 'white'};
  }
  padding: ${({ p }) => p};
  margin: ${(props) => props.margin || '10px'};
  user-select: none;
  outline: none;
`

export const Button = ({ children, onClick, disabled, color, p }) => {
  const handleOnClick = () => {
    !disabled && onClick()
  }

  return (
    <StyledButton
      onClick={handleOnClick}
      disabled={disabled}
      color={color}
      p={p}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: oneOfType([arrayOf(element), element, string]),
  onClick: func,
  disabled: bool,
  color: string,
  p: string,
}

Button.defaultProps = {
  children: 'Button',
  onClick: () => {},
  disabled: false,
  color: 'Indigo',
  p: '10px',
}
