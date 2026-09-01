import { Link, useNavigate } from 'react-router-dom'
import { useBolosCart } from '../../hooks/useBolosCart'
import { getLinkWhatsappBolos } from '../../services/whatsappBolos'
import './CarrinhoBolos.css'

function fmt(v) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function CarrinhoBolos() {
  const { itens, totalItens, totalValor, removerItem, alterarQuantidade, limparCarrinho } = useBolosCart()
  const navigate = useNavigate()

  const vazio = itens.length === 0

  const handleFinalizar = () => {
    window.open(getLinkWhatsappBolos(itens, totalValor), '_blank')
  }

  return (
    <section className="carrinho-bolos">
      <header className="carrinho-bolos__header">
        <button
          type="button"
          className="carrinho-bolos__voltar"
          onClick={() => navigate('/bolos')}
          aria-label="Voltar"
        >
          ←
        </button>
        <h1>Meu pedido</h1>
        {!vazio && (
          <button type="button" className="carrinho-bolos__limpar" onClick={limparCarrinho}>
            Limpar
          </button>
        )}
      </header>

      {vazio ? (
        <div className="carrinho-bolos__vazio">
          <p>Nenhum bolo no pedido ainda.</p>
          <Link to="/bolos" className="carrinho-bolos__cta">
            Ver bolos →
          </Link>
        </div>
      ) : (
        <>
          <ul className="carrinho-bolos__lista">
            {itens.map((item) => (
              <li key={item.itemId} className="carrinho-bolos__item">
                <div className="carrinho-bolos__item-info">
                  <b>{item.nome}</b>
                  {item.obs && <span className="carrinho-bolos__obs">{item.obs}</span>}
                  <span className="carrinho-bolos__item-preco">
                    {item.preco ? fmt(item.preco * item.quantidade) : 'A combinar'}
                  </span>
                </div>
                <div className="carrinho-bolos__controles">
                  <button type="button" onClick={() => alterarQuantidade(item.itemId, -1)}>−</button>
                  <span>{item.quantidade}</span>
                  <button type="button" onClick={() => alterarQuantidade(item.itemId, 1)}>+</button>
                  <button
                    type="button"
                    className="carrinho-bolos__remover"
                    onClick={() => removerItem(item.itemId)}
                    aria-label="Remover"
                  >
                    ×
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="carrinho-bolos__total">
            <span>{totalItens} {totalItens === 1 ? 'item' : 'itens'}</span>
            <strong>{totalValor > 0 ? fmt(totalValor) : 'A combinar'}</strong>
          </div>

          <p className="carrinho-bolos__aviso">
            ℹ️ Entrega a combinar. Confirme disponibilidade pelo WhatsApp.
          </p>

          <button
            type="button"
            className="carrinho-bolos__finalizar"
            onClick={handleFinalizar}
          >
            💬 Finalizar pelo WhatsApp
          </button>
        </>
      )}
    </section>
  )
}

export default CarrinhoBolos
