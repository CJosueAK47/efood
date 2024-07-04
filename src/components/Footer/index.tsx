import { FooterStyle, Branding, SocialMedia, Disclaimer } from './styles'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook-round-svgrepo-com 1.png'
import instagram from '../../assets/instagram-round-svgrepo-com (1) 1.png'
import twitter from '../../assets/twitter-2-svgrepo-com 1.png'

const Footer = () => (
  <FooterStyle>
    <Branding src={logo} alt="Logo_efood" />
    <SocialMedia>
      <img src={facebook} alt="" />
      <img src={instagram} alt="" />
      <img src={twitter} alt="" />
    </SocialMedia>
    <Disclaimer>
      A ifood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Disclaimer>
  </FooterStyle>
)

export default Footer
