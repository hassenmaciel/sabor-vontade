import { Outlet } from 'react-router-dom'
import FloatingCart from '../components/FloatingCart/FloatingCart'

// Header removido daqui — está integrado dentro do componente Hero
// para evitar sobreposição de position:absolute entre os dois elementos.
function Layout() {
  return (
    <div className="app-shell">
      <Outlet />
      <FloatingCart />
    </div>
  )
}

export default Layout
