import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { cores } from '../../styles'

import { Props } from '.'

export const BotaoContainer = styled(Link)<Props>`
  background-color: ${cores.vermelho};
  color: ${cores.rosa};
  cursor: ${(props) => (props.type === 'link' ? 'pointer' : 'default')};
  font-size: ${(props) => (props.type === 'link' ? '14px' : '12px')};
  text-decoration: none;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 8px;
  padding: 6px 4px;
  font-weight: bold;
  display: inline-block;
`
