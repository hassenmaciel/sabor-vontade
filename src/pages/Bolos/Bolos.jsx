import { Outlet } from 'react-router-dom'

// BolosCartProvider foi movido para main.jsx para compartilhar
// o carrinho entre a Home (destaques) e a Vitrine (/bolos).
function Bolos() {
  return <Outlet />
}

export default Bolos
