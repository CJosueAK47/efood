import { HeroContainer, Slogan, Branding } from './styles'
import logo from '../../assets/logo.png'

const Hero = () => (
  <HeroContainer>
    <Branding src={logo} alt="Logo_ifood" />
    <Slogan>Viva Experiências Gastronômicas no Conforto da Sua Casa !</Slogan>
  </HeroContainer>
)
export default Hero
