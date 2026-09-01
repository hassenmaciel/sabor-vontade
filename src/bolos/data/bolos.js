import boloPacoca1 from '../../assets/images/pacoca-1.jpg'
import boloPacoca2 from '../../assets/images/pacoca-2.jpg'
import boloPacoca3 from '../../assets/images/pacoca-3.jpg'
import boloPacoca4 from '../../assets/images/pacoca-4.jpg'
import bombom1 from '../../assets/images/bombom-amendoim-1.png'
import bombom2 from '../../assets/images/bombom-amendoim-2.png'
import bombom3 from '../../assets/images/bombom-amendoim-3.png'
import brigadeiro1 from '../../assets/images/brigadeiro-1.jpg'
import brigadeiro2 from '../../assets/images/brigadeiro-2.jpg'
import brigadeiro3 from '../../assets/images/brigadeiro-3.jpg'
import brigadeiro4 from '../../assets/images/brigadeiro-4.jpg'
import rocambole1 from '../../assets/images/rocambole-1.jpg'
import rocambole2 from '../../assets/images/rocambole-2.jpg'
import rocambole3 from '../../assets/images/rocambole-3.jpg'
import rocambole4 from '../../assets/images/rocambole-4.jpg'

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
    fotos: [boloPacoca1, boloPacoca2, boloPacoca3, boloPacoca4],
    disponivel: true,
    destaque: true,
    video: null,
  },
  {
    id: 'bolo-bombom-amendoim',
    nome: 'Bolo de Bombom de Amendoim',
    descricao: 'Massa de chocolate com recheio cremoso de amendoim, cobertura de ganache e bombom de amendoim. Uma explosão de sabor.',
    preco: 35.00,
    tamanho: 'M',
    categorias: ['bolo-inteiro'],
    fotos: [bombom1, bombom2, bombom3],
    disponivel: true,
    destaque: false,
    video: null,
  },
  {
    id: 'bolo-brigadeiro',
    nome: 'Bolo de Brigadeiro',
    descricao: 'Massa úmida de chocolate coberta com brigadeiro cremoso, granulado e brigadeiros artesanais por cima. Pura indulgência.',
    preco: 35.00,
    tamanho: 'M',
    categorias: ['bolo-inteiro'],
    fotos: [brigadeiro1, brigadeiro2, brigadeiro3, brigadeiro4],
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
    fotos: ['https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80'],
    disponivel: true,
    destaque: false,
    video: null,
  },
  {
    id: 'rocambole-maracuja',
    nome: 'Rocambole de Maracujá',
    descricao: 'Massa leve e aerada recheada com creme suave de maracujá, coberta com calda concentrada de maracujá com sementes. Refrescante e irresistível.',
    preco: 35.00,
    tamanho: 'G',
    categorias: ['bolo-inteiro', 'especial-do-dia'],
    fotos: [rocambole1, rocambole2, rocambole3, rocambole4],
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
    fotos: ['https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80'],
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
