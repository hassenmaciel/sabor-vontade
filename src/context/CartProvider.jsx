import { useEffect, useMemo, useState } from 'react'
import { CartContext } from './CartContext'

const CHAVE_STORAGE = 'sabor-e-vontade:carrinho'

function carregarCarrinho() {
  try {
    const bruto = window.localStorage.getItem(CHAVE_STORAGE)
    return bruto ? JSON.parse(bruto) : []
  } catch {
    return []
  }
}

function salvarCarrinho(itens) {
  try {
    window.localStorage.setItem(CHAVE_STORAGE, JSON.stringify(itens))
  } catch {
    // Armazenamento indisponível (ex.: modo privado) — segue sem persistir.
  }
}

// Item unificado do carrinho, independente da categoria de origem:
// { id, categoriaId: 'bolo' | 'acai' | 'doces', nome, quantidade, precoUnitario, detalhes? }
// `detalhes` é livre — a rota /acai/configurador guarda ali o resumo de
// tamanho/base/ingredientes; a rota /bolos guarda variação/tamanho do bolo.
export function CartProvider({ children }) {
  const [itens, setItens] = useState(() => carregarCarrinho())

  useEffect(() => {
    salvarCarrinho(itens)
  }, [itens])

  const adicionarItem = (item) => {
    setItens((atual) => [
      ...atual,
      {
        id: `${item.categoriaId}-${Date.now()}-${Math.round(Math.random() * 1000)}`,
        quantidade: 1,
        ...item,
      },
    ])
  }

  const removerItem = (id) => {
    setItens((atual) => atual.filter((item) => item.id !== id))
  }

  const limparCarrinho = () => setItens([])

  const totalItens = useMemo(
    () => itens.reduce((soma, item) => soma + item.quantidade, 0),
    [itens],
  )

  const totalValor = useMemo(
    () => itens.reduce((soma, item) => soma + item.precoUnitario * item.quantidade, 0),
    [itens],
  )

  const value = {
    itens,
    totalItens,
    totalValor,
    adicionarItem,
    removerItem,
    limparCarrinho,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
