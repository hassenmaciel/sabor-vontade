import { useContext } from 'react'
import { AcaiCartContext } from '../context/AcaiCartContext'

export function useAcaiCart() {
  const context = useContext(AcaiCartContext)
  if (!context) {
    throw new Error('useAcaiCart precisa ser usado dentro de um AcaiCartProvider')
  }
  return context
}
