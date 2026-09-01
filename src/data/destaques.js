// Destaques da Home — espelham os produtos reais do catálogo de bolos.
// As fotos e preços são os mesmos de src/bolos/data/bolos.js.

import boloPacocaImg from '../assets/images/bolo-pacoca.png'

export const destaquesPorCategoria = {
  bolo: [
    {
      id: 'bolo-pacoca',
      nome: 'Bolo de Paçoca',
      descricao: 'Cobertura de brigadeiro de paçoca e amendoim triturado.',
      preco: 35.00,
      foto: boloPacocaImg,
      rota: '/bolos',
    },
    {
      id: 'bolo-brigadeiro',
      nome: 'Bolo de Brigadeiro',
      descricao: 'Recheio e cobertura de brigadeiro cremoso.',
      preco: 35.00,
      foto: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&q=80',
      rota: '/bolos',
    },
    {
      id: 'bolo-chocolate',
      nome: 'Bolo de Chocolate',
      descricao: 'Massa rica em cacau com ganache.',
      preco: 35.00,
      foto: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
      rota: '/bolos',
    },
  ],
  acai: [
    {
      id: 'acai-300',
      nome: 'Açaí 300ml',
      descricao: '3 complementos à sua escolha.',
      preco: 16.9,
      foto: null,
      rota: '/acai/configurador',
    },
    {
      id: 'acai-500',
      nome: 'Açaí 500ml',
      descricao: 'Mais sabor para aproveitar.',
      preco: 21.9,
      foto: null,
      rota: '/acai/configurador',
    },
  ],
  doces: [],
}
