// Catálogo real — Sabor & Vontade / Doce & Desejo
// Fotos: temporariamente usando URLs do Unsplash (substituir pelas reais)
// Instagram: https://www.instagram.com/rosilenepereiramaciel1

export const WHATSAPP_BOLOS = '5599984195290'

export const categorias = [
  { id: 'todos', nome: 'Todos' },
  { id: 'bolo-inteiro', nome: 'Bolo Inteiro' },
  { id: 'encomenda', nome: 'Encomenda' },
  { id: 'especial-do-dia', nome: 'Especial do Dia' },
]

export const bolos = [
  {
    id: 'bolo-pacoca',
    nome: 'Bolo de Paçoca',
    descricao: 'Massa fofinha com cobertura de brigadeiro de paçoca e amendoim triturado por cima. Irresistível.',
    preco: 35.00,
    tamanho: 'M',
    categorias: ['bolo-inteiro', 'especial-do-dia'],
    // Foto real enviada pelo cliente
    foto: null, // será importada via import estático abaixo
    fotoLocal: 'bolo-pacoca',
    disponivel: true,
    destaque: true,
    video: null,
  },
  {
    id: 'bolo-amendoim',
    nome: 'Bolo de Amendoim',
    descricao: 'Bolo úmido de amendoim com cobertura cremosa e amendoim granulado. Sabor que conquista.',
    preco: 35.00,
    tamanho: 'M',
    categorias: ['bolo-inteiro'],
    fotoUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    disponivel: true,
    destaque: false,
    video: null,
  },
  {
    id: 'bolo-brigadeiro',
    nome: 'Bolo de Brigadeiro',
    descricao: 'Massa de chocolate com recheio e cobertura de brigadeiro cremoso. Clássico que nunca decepciona.',
    preco: 35.00,
    tamanho: 'M',
    categorias: ['bolo-inteiro'],
    fotoUrl: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80',
    disponivel: true,
    destaque: false,
    video: null,
  },
  {
    id: 'bolo-chocolate',
    nome: 'Bolo de Chocolate',
    descricao: 'Massa rica em cacau com cobertura de ganache. Para quem ama chocolate de verdade.',
    preco: 35.00,
    tamanho: 'M',
    categorias: ['bolo-inteiro'],
    fotoUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    disponivel: true,
    destaque: false,
    video: null,
  },
  {
    id: 'encomenda',
    nome: 'Bolo por Encomenda',
    descricao: 'Escolha o sabor, o tamanho e a ocasião. Fazemos com todo carinho para o seu momento especial.',
    preco: null,
    tamanho: null,
    categorias: ['encomenda'],
    fotoUrl: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80',
    disponivel: true,
    destaque: false,
    infoExtra: 'Prazo mínimo: 1 dia. Confirme disponibilidade pelo WhatsApp.',
    video: null,
  },
]

export function listarBolos() {
  return bolos.filter((b) => b.disponivel)
}

export function listarPorCategoria(categoriaId) {
  if (!categoriaId || categoriaId === 'todos') return listarBolos()
  return listarBolos().filter((b) => b.categorias.includes(categoriaId))
}

export function buscarBoloPorId(id) {
  return bolos.find((b) => b.id === id)
}
