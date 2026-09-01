import { Link } from 'react-router-dom'
import heroImage from '../../assets/images/hero-premium.png'
import './Hero.css'

function Hero({ onPedirAgora, onVerOpcoes }) {
  return (
    <section className="hero" id="home">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Fatia de bolo de chocolate com morango ao lado de um copo de açaí"
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        {/* Header */}
        <header className="hero__header">
          <Link to="/" className="hero__brand">
            Sabor &amp;
            <span>Vontade</span>
            <small>BOLOS · AÇAÍ</small>
          </Link>
          <button className="hero__menu" aria-label="Abrir menu" type="button">
            <span aria-hidden="true">☰</span>
          </button>
        </header>

        {/* Copy */}
        <div className="hero__copy">
          <p className="hero__eyebrow">Bolos artesanais · Açaí premium</p>
          <h1 className="hero__title">
            Seu momento <b>mais gostoso</b> começa aqui.
          </h1>
          <p className="hero__subtitle">
            Bolos artesanais e açaí do jeito que você ama. Feitos para
            transformar sua vontade em momentos inesquecíveis.
          </p>
          <div className="hero__actions">
            <button className="btn btn--primary" type="button" onClick={onPedirAgora}>
              Pedir agora
            </button>
            <button className="btn btn--ghost" type="button" onClick={onVerOpcoes}>
              Ver opções
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
