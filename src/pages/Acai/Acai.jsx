import { Outlet } from 'react-router-dom'
import { AcaiCartProvider } from '../../acai/context/AcaiCartProvider'

// Wrapper da rota /acai — injeta o CartProvider isolado do configurador.
// Sub-rotas: /acai/configurador, /acai/carrinho
function Acai() {
  return (
    <AcaiCartProvider>
      <Outlet />
    </AcaiCartProvider>
  )
}

export default Acai
