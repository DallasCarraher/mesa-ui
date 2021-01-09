import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import { getColor } from './components/Colors'

const SpacerStyles = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: ${({ systemColor }) => getColor(systemColor)};
  border-radius: 10px;
`

export const Spacer = ({ height, width, systemColor }) => (
  <SpacerStyles height={height} width={width} systemColor={systemColor} />
)

Spacer.propTypes = {
  height: string.isRequired,
  width: string,
  systemColor: string,
}

Spacer.defaultProps = {
  width: '0px',
  systemColor: 'Blue',
}

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`
