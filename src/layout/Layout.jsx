import { Outlet } from 'react-router-dom'
import FloatingCart from '../components/FloatingCart/FloatingCart'

function Layout() {
  return (
    <div className="app-shell">
      <Outlet />
      <FloatingCart />
    </div>
  )
}

export default Layout
