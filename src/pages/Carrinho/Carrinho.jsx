import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import { getLinkWhatsapp } from '../../services/whatsappService'
import './Carrinho.css'

function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function Carrinho() {
  const { itens, totalValor, removerItem } = useCart()

  return (
    <section className="carrinho">
      <h1>Meu pedido</h1>

      {itens.length === 0 ? (
        <p className="carrinho__vazio">
          Seu carrinho está vazio. <Link to="/">Voltar para a home</Link>
        </p>
      ) : (
        <>
          <ul className="carrinho__lista">
            {itens.map((item) => (
              <li key={item.id} className="carrinho__item">
                <div>
                  <b>{item.nome}</b>
                  <span>{item.quantidade}x {formatarPreco(item.precoUnitario)}</span>
                </div>
                <button type="button" onClick={() => removerItem(item.id)} aria-label={`Remover ${item.nome}`}>
                  ×
                </button>
              </li>
            ))}
          </ul>

          <div className="carrinho__total">
            <span>Total</span>
            <strong>{formatarPreco(totalValor)}</strong>
          </div>

          <a
            className="carrinho__whatsapp"
            href={getLinkWhatsapp(itens)}
            target="_blank"
            rel="noreferrer"
          >
            Finalizar pelo WhatsApp
          </a>
        </>
      )}
    </section>
  )
}

export default Carrinho
