import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../models/produto';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  secaoAtiva: string = 'produtos';
  atividades: string[] = [];

  produtos: Produto[] = [
    new Produto(1, 'Placa de vídeo RTX 2080 Super', 2199, 'placas de vídeo', '8 GB de memória e duas ventoinhas.', 'images/produtos/gpu.jpg', 10),
    new Produto(2, 'Teclado mecânico 60%', 349, 'teclados', 'Compacto, com luz RGB e cabo USB-C.', 'images/produtos/teclado.jpg', 15),
    new Produto(3, 'Mouse gamer sem fio', 189.9, 'mouses', 'Pesa só 60 g e a bateria dura até 70 horas.', 'images/produtos/mouse.jpg', 20)
  ];
  proximoId: number = 4;
  idEmEdicao: number = 0;
  idParaExcluir: number = 0;
  novoNome: string = '';
  novoPreco: number = 0;
  novoEstoque: number = 0;
  mensagemErro: string = '';

  usuarios: Usuario[] = [];
  emailEmEdicao: string = '';
  emailParaExcluir: string = '';
  clienteNome: string = '';
  clienteEmail: string = '';
  clienteSenha: string = '';
  erroCliente: string = '';

  constructor() {
    const salvos = localStorage.getItem('usuarios');
    if (salvos) {
      this.usuarios = JSON.parse(salvos);
    }
  }

  mostrarSecao(secao: string) {
    this.secaoAtiva = secao;
  }

  registrarAtividade(texto: string) {
    this.atividades.push(`${new Date().toLocaleString('pt-BR')} - ${texto}`);
  }

  cancelarExclusao() {
    this.idParaExcluir = 0;
    this.emailParaExcluir = '';
  }

  salvarProduto() {
    const nome = this.novoNome.trim();

    if (nome === '') {
      this.mensagemErro = 'Informe o nome do produto.';
      return;
    }

    if (this.novoPreco <= 0) {
      this.mensagemErro = 'Informe um preço maior que zero.';
      return;
    }

    if (this.novoEstoque < 0) {
      this.mensagemErro = 'O estoque não pode ser negativo.';
      return;
    }

    if (this.idEmEdicao === 0) {
      this.produtos.push(new Produto(this.proximoId, nome, Number(this.novoPreco), '', '', '', Number(this.novoEstoque)));
      this.proximoId++;
      this.registrarAtividade(`Produto cadastrado: ${nome}`);
    } else {
      for (let produto of this.produtos) {
        if (produto.id === this.idEmEdicao) {
          produto.nome = nome;
          produto.preco = Number(this.novoPreco);
          produto.estoque = Number(this.novoEstoque);
        }
      }
      this.registrarAtividade(`Produto alterado: ${nome}`);
    }

    this.cancelarProduto();
  }

  editarProduto(produto: Produto) {
    this.idEmEdicao = produto.id;
    this.novoNome = produto.nome;
    this.novoPreco = produto.preco;
    this.novoEstoque = produto.estoque;
    this.mensagemErro = '';
  }

  cancelarProduto() {
    this.idEmEdicao = 0;
    this.novoNome = '';
    this.novoPreco = 0;
    this.novoEstoque = 0;
    this.mensagemErro = '';
  }

  pedirExclusaoProduto(produto: Produto) {
    this.idParaExcluir = produto.id;
  }

  excluirProduto(produto: Produto) {
    const restantes: Produto[] = [];
    for (let atual of this.produtos) {
      if (atual.id !== produto.id) {
        restantes.push(atual);
      }
    }
    this.produtos = restantes;
    this.idParaExcluir = 0;
    this.registrarAtividade(`Produto excluído: ${produto.nome}`);

    if (this.idEmEdicao === produto.id) {
      this.cancelarProduto();
    }
  }

  salvarCliente() {
    const nome = this.clienteNome.trim();

    if (nome === '' || this.clienteEmail.trim() === '' || this.clienteSenha.trim() === '') {
      this.erroCliente = 'Preencha nome, e-mail e senha.';
      return;
    }

    if (nome === 'admin') {
      this.erroCliente = 'Esse nome não pode ser usado.';
      return;
    }

    if (this.emailEmEdicao === '') {
      for (let usuario of this.usuarios) {
        if (usuario.email === this.clienteEmail) {
          this.erroCliente = 'Este e-mail já está cadastrado.';
          return;
        }
      }
      this.usuarios.push(new Usuario(nome, this.clienteEmail, this.clienteSenha));
      this.registrarAtividade(`Cliente cadastrado: ${nome}`);
    } else {
      for (let usuario of this.usuarios) {
        if (usuario.email === this.emailEmEdicao) {
          usuario.nome = nome;
          usuario.senha = this.clienteSenha;
        }
      }
      this.registrarAtividade(`Cliente alterado: ${nome}`);
    }

    this.salvarUsuarios();
    this.cancelarCliente();
  }

  editarCliente(usuario: Usuario) {
    this.emailEmEdicao = usuario.email;
    this.clienteNome = usuario.nome;
    this.clienteEmail = usuario.email;
    this.clienteSenha = usuario.senha;
    this.erroCliente = '';
  }

  cancelarCliente() {
    this.emailEmEdicao = '';
    this.clienteNome = '';
    this.clienteEmail = '';
    this.clienteSenha = '';
    this.erroCliente = '';
  }

  pedirExclusaoCliente(usuario: Usuario) {
    this.emailParaExcluir = usuario.email;
  }

  excluirCliente(usuario: Usuario) {
    const restantes: Usuario[] = [];
    for (let atual of this.usuarios) {
      if (atual.email !== usuario.email) {
        restantes.push(atual);
      }
    }
    this.usuarios = restantes;
    this.emailParaExcluir = '';
    this.salvarUsuarios();
    this.registrarAtividade(`Cliente excluído: ${usuario.nome}`);

    if (this.emailEmEdicao === usuario.email) {
      this.cancelarCliente();
    }
  }

  salvarUsuarios() {
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }
}
