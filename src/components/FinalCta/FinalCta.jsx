import './FinalCta.css'

function FinalCta({ onPedirWhatsapp }) {
  return (
    <footer className="final-cta">
      <h2>Bateu aquela vontade?</h2>
      <p>Não deixe para depois. Escolha, peça e aproveite.</p>
      <button className="final-cta__whats" type="button" onClick={onPedirWhatsapp}>
        Pedir pelo WhatsApp
      </button>
    </footer>
  )
}

export default FinalCta
