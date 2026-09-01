import { Link, useLocation } from 'react-router-dom'
import { useBolosCart } from '../../bolos/hooks/useBolosCart'
import './FloatingCart.css'

function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

// Carrinho flutuante global — usa BolosCart (único carrinho de bolos).
// Oculto nas rotas /bolos (vitrine tem carrinho próprio) e /acai.
function FloatingCart() {
  const { pathname } = useLocation()
  const { totalItens, totalValor } = useBolosCart()

  const rotasOcultas = ['/bolos', '/acai']
  if (rotasOcultas.some((r) => pathname.startsWith(r))) return null
  if (totalItens === 0) return null

  return (
    <div className="floating-cart">
      <div className="floating-cart__icon" aria-hidden="true">
        🛍️
        <span className="floating-cart__count">{totalItens}</span>
      </div>
      <div className="floating-cart__info">
        <b>Meu pedido</b>
        <span>{totalItens} {totalItens === 1 ? 'item' : 'itens'} · {formatarPreco(totalValor)}</span>
      </div>
      <Link to="/bolos/carrinho" className="floating-cart__action">
        Ver pedido →
      </Link>
    </div>
  )
}

export default FloatingCart
