import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import './FloatingCart.css'

function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function FloatingCart() {
  const { totalItens, totalValor } = useCart()

  return (
    <div className="floating-cart">
      <div className="floating-cart__icon" aria-hidden="true">
        🛍️
        <span className="floating-cart__count">{totalItens}</span>
      </div>
      <div className="floating-cart__info">
        <b>Meu pedido</b>
        <span>
          {totalItens === 0
            ? 'Nenhum item adicionado'
            : `${totalItens} ${totalItens === 1 ? 'item' : 'itens'} · ${formatarPreco(totalValor)}`}
        </span>
      </div>
      <Link to="/carrinho" className="floating-cart__action">
        Ver pedido →
      </Link>
    </div>
  )
}

export default FloatingCart
