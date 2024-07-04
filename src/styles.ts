import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#FFEBD9',
  branco: '#FFFFFF',
  dourado: '#FFB930',
  vermelho: '#E66767',
  palhaClara: '#FFF8F2'
}
export const GlobalCSS = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  font-family: Roboto, sans-serif;
  box-sizing: border-box;
  list-style: none;
}

body{
  background-color: ${cores.palhaClara};
  color: ${cores.vermelho};
}
`
