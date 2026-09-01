import { Outlet, useLocation } from 'react-router-dom'
import FloatingCart from '../components/FloatingCart/FloatingCart'

// O carrinho flutuante global só aparece na Home e rotas genéricas.
// /bolos e /acai têm carrinhos próprios dentro de seus universos.
const ROTAS_SEM_CARRINHO_GLOBAL = ['/bolos', '/acai']

function Layout() {
  const { pathname } = useLocation()
  const esconderCarrinho = ROTAS_SEM_CARRINHO_GLOBAL.some((rota) =>
    pathname.startsWith(rota),
  )

  return (
    <div className="app-shell">
      <Outlet />
      {!esconderCarrinho && <FloatingCart />}
    </div>
  )
}

export default Layout
