import { listarCategoriasAtivas } from '../../data/categorias'
import heroImage from '../../assets/images/hero-premium.png'
import './ChoiceGateway.css'

function ChoiceGateway({ escolhaAtual, onEscolher, id }) {
  const categoriasAtivas = listarCategoriasAtivas()

  return (
    <section className="choice-gateway" id={id}>
      <h2 className="choice-gateway__title">
        ✧ <span>Escolha sua vontade</span> ✧
      </h2>
      <p className="choice-gateway__subtitle">Hoje é dia de bolo ou de açaí?</p>

      <div className="choice-gateway__grid">
        {categoriasAtivas.map((categoria) => (
          <button
            key={categoria.id}
            type="button"
            className={`choice-card choice-card--${categoria.id}`}
            aria-pressed={escolhaAtual === categoria.id}
            style={{
              backgroundImage: `url(${heroImage})`,
              '--card-gradient': `linear-gradient(135deg, ${categoria.corPrimaria}, ${categoria.corSecundaria})`,
            }}
            onClick={() => onEscolher(categoria.id)}
          >
            <div className="choice-card__copy">
              <h3>{categoria.nome}</h3>
              <p>{categoria.descricaoCurta}</p>
              <strong>{categoria.cta} →</strong>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

export default ChoiceGateway
