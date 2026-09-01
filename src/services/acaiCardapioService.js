import { getTamanhosAtivos, getTamanhoPorId } from '../data/acai/tamanhos'
import { getBasesAtivas, getBasePorId } from '../data/acai/bases'
import { getIngredientesAtivos, getIngredientesPorIds } from '../data/acai/ingredientes'
import { getProdutoPorId } from '../data/acai/produtos'
import { getNumeroWhatsapp } from '../data/loja'

export function listarTamanhos() { return getTamanhosAtivos() }
export function listarBases() { return getBasesAtivas() }
export function obterTamanho(id) { return getTamanhoPorId(id) }
export function obterBase(id) { return getBasePorId(id) }
export function listarIngredientes() { return getIngredientesAtivos() }
export function listarIngredientesPorIds(ids) { return getIngredientesPorIds(ids) }
export function obterProduto(id) { return getProdutoPorId(id) }
export function obterNumeroWhatsapp() { return getNumeroWhatsapp() }
