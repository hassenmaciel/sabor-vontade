import { Link } from 'react-router-dom'
import { buscarCategoriaPorId } from '../../data/categorias'
import { destaquesPorCategoria } from '../../data/destaques'
import './DynamicHighlights.css'

const textos = {
  bolo: {
    tag: 'Você escolheu · Bolos',
    titulo: 'Destaques da casa.',
    intro: 'Escolhas especiais preparadas para você.',
    linkTexto: 'Ver cardápio completo',
    link: '/bolos',
  },
  acai: {
    tag: 'Você escolheu · +Ki Açaí',
    titulo: 'Comece pelo seu favorito.',
    intro: 'Ou personalize cada detalhe no montador.',
    linkTexto: 'Montar meu açaí',
    link: '/acai/configurador',
  },
  doces: {
    tag: 'Você escolheu · Doces',
    titulo: 'Em breve.',
    intro: 'Novidades chegando por aqui.',
    linkTexto: 'Ver doces',
    link: '/doces',
  },
}

function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function DynamicHighlights({ escolhaAtual, onAdicionar }) {
  if (!escolhaAtual) return null

  const categoria = buscarCategoriaPorId(escolhaAtual)
  const produtos = destaquesPorCategoria[escolhaAtual] ?? []
  const texto = textos[escolhaAtual]

  if (!categoria || !texto) return null

  return (
    <section className="dynamic-highlights">
      <span className="dynamic-highlights__tag">{texto.tag}</span>
      <h2 className="dynamic-highlights__title">{texto.titulo}</h2>
      <p className="dynamic-highlights__intro">{texto.intro}</p>

      {produtos.length > 0 ? (
        <div className="dynamic-highlights__products">
          {produtos.map((produto) => (
            <article className="product-card" key={produto.id}>

              {/* Foto */}
              {produto.foto && (
                <Link to={produto.rota ?? '#'} className="product-card__foto-link">
                  <div
                    className="product-card__foto"
                    style={{ backgroundImage: `url(${produto.foto})` }}
                    role="img"
                    aria-label={produto.nome}
                  />
                </Link>
              )}

              <div className="product-card__info">
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>

                {/* Link de detalhes abaixo da descrição */}
                <Link to={produto.rota ?? '#'} className="product-card__ver-mais">
                  Ver detalhes →
                </Link>

                <div className="product-card__rodape">
                  <div className="product-card__price">{formatarPreco(produto.preco)}</div>
                  <button
                    type="button"
                    className="product-card__add"
                    onClick={() =>
                      onAdicionar({
                        categoriaId: escolhaAtual,
                        nome: produto.nome,
                        precoUnitario: produto.preco,
                      })
                    }
                  >
                    + Adicionar
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>
      ) : (
        <p className="dynamic-highlights__empty">
          Em breve por aqui.
        </p>
      )}

      <Link to={texto.link ?? categoria.rota} className="dynamic-highlights__link">
        {texto.linkTexto}
      </Link>
    </section>
  )
}

export default DynamicHighlights
