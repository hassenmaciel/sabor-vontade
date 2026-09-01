import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CarrinhoItem from '../../../components/acai/CarrinhoItem/CarrinhoItem'
import TotalPedido from '../../../components/acai/TotalPedido/TotalPedido'
import ModalFinalizarPedido from '../../../components/acai/ModalFinalizarPedido/ModalFinalizarPedido'
import ModalAviso from '../../../components/acai/ModalAviso/ModalAviso'
import { useAcaiCart } from '../../../hooks/useAcaiCart'
import { obterProduto } from '../../../services/acaiCardapioService'
import { ID_PRODUTO_ACAI } from '../../../data/acai/produtos'
import { formatarPreco } from '../../../utils/acai/precos'
import './Carrinho.css'

function CarrinhoAcai() {
  const cart = useAcaiCart()
  const navigate = useNavigate()
  const produto = obterProduto(ID_PRODUTO_ACAI)

  const [modalEnviarAberto, setModalEnviarAberto] = useState(false)
  const [modalEnviadoAberto, setModalEnviadoAberto] = useState(false)

  const carrinhoVazio = cart.itens.length === 0

  const handleEditar = (id) => { cart.iniciarEdicao(id); navigate('/acai/configurador') }

  const handleEnviado = () => { setModalEnviarAberto(false); setModalEnviadoAberto(true) }

  const handleFazerOutroPedido = () => {
    cart.limparCarrinho()
    setModalEnviadoAberto(false)
    navigate('/acai/configurador')
    window.scrollTo(0, 0)
  }

  const handleVoltarInicio = () => {
    cart.limparCarrinho()
    setModalEnviadoAberto(false)
    navigate('/')
    window.scrollTo(0, 0)
  }

  return (
    <section className="carrinho-page">
      <h1 className="carrinho-page__title">Seu carrinho</h1>
      {carrinhoVazio ? (
        <div className="carrinho-vazio">
          <p className="carrinho-vazio__texto">Seu carrinho está vazio. Monte seu primeiro açaí!</p>
          <Link to="/acai/configurador" className="carrinho-vazio__cta">Montar meu açaí</Link>
        </div>
      ) : (
        <>
          <ul className="carrinho-page__lista">
            {cart.itens.map((item) => (
              <CarrinhoItem key={item.id} item={item} onEditar={handleEditar} onDuplicar={cart.duplicarItem} onRemover={cart.removerItem} />
            ))}
          </ul>
          <TotalPedido total={formatarPreco(cart.total)} />
          <button type="button" className="carrinho-page__enviar" onClick={() => setModalEnviarAberto(true)}>
            Enviar pedido
          </button>
        </>
      )}
      <ModalFinalizarPedido aberto={modalEnviarAberto} onFechar={() => setModalEnviarAberto(false)} onEnviado={handleEnviado} produto={produto} itens={cart.itens} total={cart.total} />
      <ModalAviso
        aberto={modalEnviadoAberto}
        icone="🎉"
        titulo="Pedido enviado!"
        acaoSecundaria={{ label: '🏠 Voltar ao início', onClick: handleVoltarInicio }}
        acaoPrimaria={{ label: '🍧 Fazer outro pedido', onClick: handleFazerOutroPedido }}
      >
        Obrigado! Seu pedido já chegou até nossa equipe.<br />Agora é só aguardar nossa confirmação.
      </ModalAviso>
    </section>
  )
}

export default CarrinhoAcai
