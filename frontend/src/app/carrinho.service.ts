import { Injectable, computed, signal } from '@angular/core';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
}

export interface ItemCarrinho extends Produto {
  quantidade: number;
}

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  // itens de exemplo só pra você testar; depois troque por signal<ItemCarrinho[]>([])
  itens = signal<ItemCarrinho[]>([
    { id: 1, nome: 'Placa de vídeo RTX 4060 8GB', preco: 2199, quantidade: 1 },
    { id: 2, nome: 'Teclado mecânico RGB', preco: 349.9, quantidade: 1 },
  ]);

  quantidade = computed(() =>
    this.itens().reduce((soma, i) => soma + i.quantidade, 0)
  );
  subtotal = computed(() =>
    this.itens().reduce((soma, i) => soma + i.preco * i.quantidade, 0)
  );
  frete = computed(() =>
    this.subtotal() === 0 || this.subtotal() >= 299 ? 0 : 29.9
  );
  total = computed(() => this.subtotal() + this.frete());

  adicionar(produto: Produto) {
    this.itens.update((lista) => {
      const existe = lista.find((i) => i.id === produto.id);
      if (existe) {
        return lista.map((i) =>
          i.id === produto.id ? { ...i, quantidade: i.quantidade + 1 } : i
        );
      }
      return [...lista, { ...produto, quantidade: 1 }];
    });
  }

  alterarQuantidade(id: number, delta: number) {
    this.itens.update((lista) =>
      lista
        .map((i) => (i.id === id ? { ...i, quantidade: i.quantidade + delta } : i))
        .filter((i) => i.quantidade > 0)
    );
  }

  remover(id: number) {
    this.itens.update((lista) => lista.filter((i) => i.id !== id));
  }

  limpar() {
    this.itens.set([]);
  }
}