import { useRef } from 'react'
import Hero from '../../components/Hero/Hero'
import ChoiceGateway from '../../components/ChoiceGateway/ChoiceGateway'
import DynamicHighlights from '../../components/DynamicHighlights/DynamicHighlights'
import Benefits from '../../components/Benefits/Benefits'
import About from '../../components/About/About'
import FinalCta from '../../components/FinalCta/FinalCta'
import { useEscolha } from '../../hooks/useEscolha'
import { useCart } from '../../hooks/useCart'
import { useBolosCart } from '../../bolos/hooks/useBolosCart'
import { getLinkWhatsapp } from '../../services/whatsappService'

function Home() {
  const { escolhaAtual, escolher } = useEscolha()
  const { itens } = useCart()
  const bolosCart = useBolosCart()
  const escolhaRef = useRef(null)
  const destaquesRef = useRef(null)

  const irParaEscolha = () => {
    escolhaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleEscolher = (categoriaId) => {
    escolher(categoriaId)
    requestAnimationFrame(() => {
      destaquesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  // Adicionar destaque ao carrinho correto conforme a categoria escolhida
  const handleAdicionar = (item) => {
    if (item.categoriaId === 'bolo') {
      bolosCart.adicionarItem({ id: item.nome, nome: item.nome, preco: item.precoUnitario })
    }
    // Açaí e outros: carrinho global (futuro)
  }

  return (
    <>
      <Hero onVerOpcoes={irParaEscolha} />

      <div ref={escolhaRef}>
        <ChoiceGateway escolhaAtual={escolhaAtual} onEscolher={handleEscolher} />
      </div>

      <div ref={destaquesRef}>
        <DynamicHighlights escolhaAtual={escolhaAtual} onAdicionar={handleAdicionar} />
      </div>

      <Benefits />
      <About />
      <FinalCta onPedirWhatsapp={() => window.open(getLinkWhatsapp(itens), '_blank')} />
    </>
  )
}

export default Home
