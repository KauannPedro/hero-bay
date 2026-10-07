import { ItemCarrinho } from './item-carrinho';
import { Produto } from './produto';

export class Carrinho {
  itens: ItemCarrinho[] = [];

  constructor() {
    const salvos = localStorage.getItem('carrinho');
    if (salvos) {
      this.itens = JSON.parse(salvos);
    }
  }

  salvar() {
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  adicionar(produto: Produto) {
    for (let item of this.itens) {
      if (item.produto.id === produto.id) {
        item.quantidade++;
        this.salvar();
        return;
      }
    }
    this.itens.push(new ItemCarrinho(produto, 1));
    this.salvar();
  }

  aumentar(item: ItemCarrinho) {
    item.quantidade++;
    this.salvar();
  }

  diminuir(item: ItemCarrinho) {
    item.quantidade--;
    if (item.quantidade === 0) {
      this.remover(item);
    } else {
      this.salvar();
    }
  }

  remover(item: ItemCarrinho) {
    const novosItens: ItemCarrinho[] = [];
    for (let atual of this.itens) {
      if (atual.produto.id !== item.produto.id) {
        novosItens.push(atual);
      }
    }
    this.itens = novosItens;
    this.salvar();
  }

  limpar() {
    this.itens = [];
    this.salvar();
  }

  calcularSubtotal() {
    let subtotal = 0;
    for (let item of this.itens) {
      subtotal += item.produto.preco * item.quantidade;
    }
    return subtotal;
  }

  calcularFrete() {
    const subtotal = this.calcularSubtotal();
    if (subtotal === 0 || subtotal >= 299) {
      return 0;
    }
    return 29.9;
  }

  calcularTotal() {
    return this.calcularSubtotal() + this.calcularFrete();
  }

  contarItens() {
    let quantidade = 0;
    for (let item of this.itens) {
      quantidade += item.quantidade;
    }
    return quantidade;
  }
}