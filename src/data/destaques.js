import boloPacoca1 from '../assets/images/pacoca-1.jpg'
import bombom1 from '../assets/images/bombom-amendoim-1.png'

export const destaquesPorCategoria = {
  bolo: [
    {
      id: 'bolo-pacoca',
      nome: 'Bolo de Paçoca',
      descricao: 'Cobertura de brigadeiro de paçoca e amendoim triturado.',
      preco: 35.00,
      foto: boloPacoca1,
      rota: '/bolos',
    },
    {
      id: 'bolo-bombom-amendoim',
      nome: 'Bolo de Bombom de Amendoim',
      descricao: 'Ganache, recheio cremoso e bombom de amendoim.',
      preco: 35.00,
      foto: bombom1,
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
