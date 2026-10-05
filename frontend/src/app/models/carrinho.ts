
import { Produto } from './produto';

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

export interface Carrinho {
  itens: ItemCarrinho[];
  valorTotal: number;
}