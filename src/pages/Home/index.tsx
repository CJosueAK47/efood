import { useGetRestaurantsQuery } from '../../services/api'

import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'

export type Pedido = {
  id: number
  foto: string
  nome: string
  preco: number
}
export type Restaurant = {
  id: number
  titulo: string
  tipo: string
  destacado: boolean
  capa: string
  avaliacao: number
  descricao: string

  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Hero />
        <RestaurantList restaurants={restaurants} />
        <Footer />
      </>
    )
  }
  return <h4>Loading...</h4>
}
export default Home
