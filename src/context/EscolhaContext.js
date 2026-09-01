import { createContext } from 'react'

// Guarda qual "vontade" o visitante escolheu na Home (id de categorias.js)
// para que os Destaques Dinâmicos (seção 8 do inventário) saibam o que exibir.
export const EscolhaContext = createContext(null)
