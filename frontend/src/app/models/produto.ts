export class Produto {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  descricao: string;
  imagem: string;
  estoque: number;

  constructor(id: number, nome: string, preco: number, categoria: string, descricao: string, imagem: string, estoque: number) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
    this.descricao = descricao;
    this.imagem = imagem;
    this.estoque = estoque;
  }
}
