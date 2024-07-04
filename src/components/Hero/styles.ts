import styled from 'styled-components'
import banner from '../../assets/fundoHero.png'

export const HeroContainer = styled.div`
  width: 100%;
  background-image: url(${banner});
  display: flex;
  height: 360px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Branding = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;
`
export const Slogan = styled.h4`
  max-width: 539px;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
`
