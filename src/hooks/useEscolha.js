import { useContext } from 'react'
import { EscolhaContext } from '../context/EscolhaContext'

export function useEscolha() {
  const context = useContext(EscolhaContext)

  if (!context) {
    throw new Error('useEscolha precisa ser usado dentro de um EscolhaProvider')
  }

  return context
}
