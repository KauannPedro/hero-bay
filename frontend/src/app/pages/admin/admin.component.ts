import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../models/produto';

@Component({
  imports: [CurrencyPipe, FormsModule],
  selector: 'app-admin',
  styleUrl: './admin.component.css',
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  secaoAtiva: 'produtos' | 'clientes' | 'logs' = 'produtos';

  novoNome: string = '';
  novoPreco: number | null = null;
  novoEstoque: number | null = null;
  mensagemErro: string = '';

  produtos: (Produto & { estoque: number })[] = [
    {
      id: 1,
      nome: 'Placa de vídeo RTX 4060 8GB',
      preco: 249.90,
      estoque: 10,
      descricao: 'Placa de vídeo com 8 GB de memória.',
      imagem: '',
      categoria: 'Placas de vídeo'
    },
    {
      id: 2,
      nome: 'Teclado Mecânico RGB',
      preco: 349.90,
      estoque: 10,
      descricao: 'Teclado mecânico com iluminação RGB.',
      imagem: '',
      categoria: 'Periféricos'
    },
    {
      id: 3,
      nome: 'Monitor 27" 165Hz',
      preco: 899.90,
      estoque: 5,
      descricao: 'Monitor de 27 polegadas com frequência de 165 Hz.',
      imagem: '',
      categoria: 'Monitores'
    }
  ];

  adicionarProduto() {
    const nome = this.novoNome.trim();
    const preco = this.novoPreco;
    const estoque = this.novoEstoque;

    if (nome === '') {
      this.mensagemErro = 'Informe o nome do produto.';
      return;
    }

    if (preco === null || !Number.isFinite(preco) || preco <= 0) {
      this.mensagemErro = 'Informe um preço maior que zero.';
      return;
    }

    if (
      estoque === null ||
      !Number.isInteger(estoque) ||
      estoque < 0
    ) {
      this.mensagemErro = 'Informe um estoque inteiro igual ou maior que zero.';
      return;
    }

    const novoId =
      Math.max(0, ...this.produtos.map(produto => produto.id)) + 1;

    this.produtos.push({
      id: novoId,
      nome: nome,
      preco: preco,
      estoque: estoque,
      descricao: '',
      imagem: '',
      categoria: ''
    });

    this.novoNome = '';
    this.novoPreco = null;
    this.novoEstoque = null;
    this.mensagemErro = '';
  }
}
