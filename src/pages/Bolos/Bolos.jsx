import { Outlet } from 'react-router-dom'
import { BolosCartProvider } from '../../bolos/context/BolosCartProvider'

function Bolos() {
  return (
    <BolosCartProvider>
      <Outlet />
    </BolosCartProvider>
  )
}

export default Bolos
