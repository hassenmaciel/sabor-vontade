import { useContext } from 'react'
import { BolosCartContext } from '../context/BolosCartContext'

export function useBolosCart() {
  const ctx = useContext(BolosCartContext)
  if (!ctx) throw new Error('useBolosCart precisa estar dentro de BolosCartProvider')
  return ctx
}
