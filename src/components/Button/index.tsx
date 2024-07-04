import { BotaoContainer } from './styles'

export type Props = {
  type?: 'link' | 'tag'
  title?: string
  children: string
  onClick?: () => void
  to?: string
}

const Botao = ({ to, children, type = 'tag' }: Props) => {
  return (
    <BotaoContainer type={type} to={to as string}>
      {children}
    </BotaoContainer>
  )
}
export default Botao
