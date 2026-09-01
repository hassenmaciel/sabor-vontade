import { Link } from 'react-router-dom'
import '../Bolos/Bolos.css'

function AcaiHome() {
  return (
    <section className="stub-page">
      <p className="stub-page__eyebrow">+Ki Açaí</p>
      <h1>Monte o seu açaí</h1>
      <p className="stub-page__body">
        Escolha o tamanho, a base e os ingredientes do jeito que você gosta.
      </p>
      <Link to="/acai/configurador" className="stub-page__link">
        Montar meu açaí →
      </Link>
    </section>
  )
}

export default AcaiHome
