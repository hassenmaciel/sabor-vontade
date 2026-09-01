// ID_ACAI era importado do categorias.js original — inlined aqui para evitar conflito
// com o categorias.js do app unificado.
import { tamanhos } from './tamanhos'

const ID_ACAI = 'acai'
export const ID_PRODUTO_ACAI = 'acai-montado'

export const produtos = [
  {
    id: ID_PRODUTO_ACAI,
    nome: '+Ki Açaí',
    descricao: 'Monte seu açaí do seu jeito.',
    ativo: true,
    categorias: [ID_ACAI],
    tamanhos: tamanhos.map((tamanho) => tamanho.id),
  },
]

export function getProdutosAtivos() { return produtos.filter((p) => p.ativo) }
export function getProdutoPorId(id) { return produtos.find((p) => p.id === id) }
