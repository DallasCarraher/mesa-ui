import React from 'react'
import styled from 'styled-components'
import { func, string, bool } from 'prop-types'
import { SystemColors, getColor } from '../Colors'

const StyledButton = styled.button`
  background-color: ${({ systemColor, disabled }) =>
    disabled ? SystemColors.Gray(3, 1) : getColor(systemColor)};
  border: solid 2px;
  border-color: ${({ systemColor, disabled }) =>
    disabled ? SystemColors.Gray(3, 1) : getColor(systemColor)};
  border-radius: 5px;
  color: ${(props) => props.theme.text || 'white'};
  font-size: 16px;
  :hover {
    cursor: ${({ disabled }) => !disabled && 'pointer'};
    background-color: ${({ systemColor, disabled }) =>
      disabled ? SystemColors.Gray(3, 1) : getColor(systemColor, 0.9)};
    border-color: ${({ systemColor, disabled }) =>
      disabled ? SystemColors.Gray(3, 1) : getColor(systemColor, 0.9)};
  }
  :focus {
    cursor: pointer;
    background-color: ${({ systemColor }) => getColor(systemColor, 0.9)};
    border-color: ${(props) => props.theme.text || 'white'};
  }
  :active {
    cursor: pointer;
    border-radius: 5px;
    background-color: ${({ systemColor }) => getColor(systemColor, 0.7)};
    border-color: ${(props) => props.theme.text || 'white'};
  }
  padding: ${({ p }) => p};
  margin: ${({ m }) => m};
  user-select: none;
  outline: none;
`

export const Button = React.forwardRef(
  ({ text, onClick, disabled, systemColor, p, m }, ref) => {
    const handleOnClick = () => {
      !disabled && onClick()
    }

    return (
      <StyledButton
        ref={ref}
        onClick={handleOnClick}
        disabled={disabled}
        systemColor={systemColor}
        p={p}
        m={m}
      >
        {text}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'

Button.propTypes = {
  text: string,
  onClick: func,
  disabled: bool,
  systemColor: string,
  p: string,
  m: string,
}

Button.defaultProps = {
  text: 'Button',
  onClick: () => {},
  disabled: false,
  systemColor: 'Blue',
  p: '10px',
  m: '0px',
}
