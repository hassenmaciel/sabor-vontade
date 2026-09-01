import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__brand">
        Sabor &amp;
        <span>Vontade</span>
        <small>BOLOS · AÇAÍ</small>
      </Link>
      <button className="header__menu" aria-label="Abrir menu" type="button">
        <span aria-hidden="true">☰</span>
      </button>
    </header>
  )
}

export default Header
