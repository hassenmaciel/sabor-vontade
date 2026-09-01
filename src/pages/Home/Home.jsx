import { useRef } from 'react'
import Hero from '../../components/Hero/Hero'
import ChoiceGateway from '../../components/ChoiceGateway/ChoiceGateway'
import DynamicHighlights from '../../components/DynamicHighlights/DynamicHighlights'
import Benefits from '../../components/Benefits/Benefits'
import About from '../../components/About/About'
import FinalCta from '../../components/FinalCta/FinalCta'
import { useEscolha } from '../../hooks/useEscolha'
import { useCart } from '../../hooks/useCart'
import { getLinkWhatsapp } from '../../services/whatsappService'

function Home() {
  const { escolhaAtual, escolher } = useEscolha()
  const { adicionarItem, itens } = useCart()
  const escolhaRef = useRef(null)
  const destaquesRef = useRef(null)

  const irParaEscolha = () => {
    escolhaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleEscolher = (categoriaId) => {
    escolher(categoriaId)
    // aguarda o React montar a seção dinâmica antes de rolar até ela
    requestAnimationFrame(() => {
      destaquesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <>
      <Hero onPedirAgora={irParaEscolha} onVerOpcoes={irParaEscolha} />

      <div ref={escolhaRef}>
        <ChoiceGateway escolhaAtual={escolhaAtual} onEscolher={handleEscolher} />
      </div>

      <div ref={destaquesRef}>
        <DynamicHighlights escolhaAtual={escolhaAtual} onAdicionar={adicionarItem} />
      </div>

      <Benefits />
      <About />
      <FinalCta onPedirWhatsapp={() => window.open(getLinkWhatsapp(itens), '_blank')} />
    </>
  )
}

export default Home
