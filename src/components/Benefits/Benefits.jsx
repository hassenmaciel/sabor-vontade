import './Benefits.css'

const itens = [
  { icone: '🛵', texto: 'Entrega rápida na sua região' },
  { icone: '🌿', texto: 'Ingredientes selecionados' },
  { icone: '♡', texto: 'Feito com muito carinho' },
  { icone: '♢', texto: 'Pagamento seguro' },
]

function Benefits() {
  return (
    <section className="benefits">
      {itens.map((item) => (
        <div className="benefits__item" key={item.texto}>
          <i aria-hidden="true">{item.icone}</i>
          <b>{item.texto}</b>
        </div>
      ))}
    </section>
  )
}

export default Benefits
