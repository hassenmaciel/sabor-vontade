import { useEffect, useMemo, useState } from 'react'
import { BolosCartContext } from './BolosCartContext'

const CHAVE = 'sabor-vontade:bolos:carrinho'

function carregar() {
  try {
    const bruto = window.localStorage.getItem(CHAVE)
    return bruto ? JSON.parse(bruto) : []
  } catch { return [] }
}

function salvar(itens) {
  try { window.localStorage.setItem(CHAVE, JSON.stringify(itens)) }
  catch { /* modo privado */ }
}

export function BolosCartProvider({ children }) {
  const [itens, setItens] = useState(() => carregar())

  useEffect(() => { salvar(itens) }, [itens])

  const adicionarItem = (bolo, obs = '') => {
    setItens((atual) => {
      const existente = atual.find((i) => i.id === bolo.id && i.obs === obs)
      if (existente) {
        return atual.map((i) =>
          i.id === bolo.id && i.obs === obs
            ? { ...i, quantidade: i.quantidade + 1 }
            : i,
        )
      }
      return [...atual, { ...bolo, quantidade: 1, obs, itemId: `${bolo.id}-${Date.now()}` }]
    })
  }

  const removerItem = (itemId) =>
    setItens((atual) => atual.filter((i) => i.itemId !== itemId))

  const alterarQuantidade = (itemId, delta) => {
    setItens((atual) =>
      atual
        .map((i) => (i.itemId === itemId ? { ...i, quantidade: i.quantidade + delta } : i))
        .filter((i) => i.quantidade > 0),
    )
  }

  const limparCarrinho = () => {
    setItens([])
    try { window.localStorage.removeItem(CHAVE) } catch { /* */ }
  }

  const totalItens = useMemo(() => itens.reduce((s, i) => s + i.quantidade, 0), [itens])
  const totalValor = useMemo(
    () => itens.reduce((s, i) => s + (i.preco ?? 0) * i.quantidade, 0),
    [itens],
  )

  return (
    <BolosCartContext.Provider
      value={{ itens, totalItens, totalValor, adicionarItem, removerItem, alterarQuantidade, limparCarrinho }}
    >
      {children}
    </BolosCartContext.Provider>
  )
}
