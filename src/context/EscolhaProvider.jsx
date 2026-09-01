import { useState } from 'react'
import { EscolhaContext } from './EscolhaContext'

export function EscolhaProvider({ children }) {
  const [escolhaAtual, setEscolhaAtual] = useState(null)

  const escolher = (categoriaId) => setEscolhaAtual(categoriaId)
  const limparEscolha = () => setEscolhaAtual(null)

  const value = { escolhaAtual, escolher, limparEscolha }

  return (
    <EscolhaContext.Provider value={value}>{children}</EscolhaContext.Provider>
  )
}
