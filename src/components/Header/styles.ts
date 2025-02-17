import styled from 'styled-components'
import fundo from '../../assets/fundoHero.png'
import { cores } from '../../styles'

export const HeaderStyle = styled.header`
  background-image: url(${fundo});
  height: 163px;

  align-items: center;

  .container {
    display: flex;
    max-width: 1024px;
    justify-content: space-between;
    margin: 0 auto;
  }
`
export const Branding = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 39px;
`
export const LinkRestaurantes = styled.a`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: ${cores.vermelho};
  margin-top: 39px;
`

export const TextCart = styled.p`
  font-size: 18px;
  margin-top: 39px;
  font-weight: bold;
  cursor: pointer;
`
