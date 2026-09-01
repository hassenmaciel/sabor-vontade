import boloPacocaImg from '../../../assets/images/bolo-pacoca.png'
import './ProdutoCard.css'

const fotosLocais = {
  'bolo-pacoca': boloPacocaImg,
}

function ProdutoCard({ bolo, onVerDetalhes, onAdicionar }) {
  const foto = bolo.fotoLocal
    ? fotosLocais[bolo.fotoLocal]
    : bolo.fotoUrl

  const isEncomenda = bolo.categorias.includes('encomenda')

  return (
    <article className="produto-card">
      <button
        className="produto-card__foto-btn"
        type="button"
        onClick={() => onVerDetalhes(bolo)}
        aria-label={`Ver detalhes de ${bolo.nome}`}
      >
        <div
          className="produto-card__foto"
          style={{ backgroundImage: `url(${foto})` }}
          role="img"
          aria-label={bolo.nome}
        >
          {bolo.destaque && (
            <span className="produto-card__badge">⭐ Destaque</span>
          )}
        </div>
      </button>

      <div className="produto-card__info">
        <h3 className="produto-card__nome">{bolo.nome}</h3>
        <p className="produto-card__desc">{bolo.descricao}</p>

        {/* Link de detalhes visível abaixo da descrição */}
        <button
          type="button"
          className="produto-card__ver-detalhes"
          onClick={() => onVerDetalhes(bolo)}
        >
          {isEncomenda ? 'Fazer encomenda →' : 'Ver detalhes / Personalizar →'}
        </button>

        <div className="produto-card__rodape">
          {bolo.tamanho && (
            <span className="produto-card__tamanho">Tam. {bolo.tamanho}</span>
          )}
          <span className="produto-card__preco">
            {bolo.preco
              ? bolo.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              : 'A combinar'}
          </span>
        </div>

        {!isEncomenda && (
          <button
            className="produto-card__btn"
            type="button"
            onClick={() => onAdicionar(bolo)}
          >
            + Adicionar ao pedido
          </button>
        )}
      </div>
    </article>
  )
}

export default ProdutoCard
