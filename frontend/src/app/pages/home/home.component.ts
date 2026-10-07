import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Produto } from '../../models/produto';
import { Carrinho } from '../../models/carrinho';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  heroBayOne: Produto = new Produto(100, 'Hero Bay One', 8999, 'pc', 'Vem com placa de vídeo GeForce RTX, 32 GB de memória, SSD de 2 TB e watercooler de 360 mm.', 'images/produtos/hero-bay-one.jpg', 20);

  categorias = ['todos', 'placas de vídeo', 'teclados', 'mouses', 'áudio', 'refrigeração'];
  categoriaSelecionada: string = 'todos';

  produtos: Produto[] = [
    new Produto(1, 'Placa de vídeo RTX 2080 Super', 2199, 'placas de vídeo', '8 GB de memória e duas ventoinhas.', 'images/produtos/gpu.jpg', 10),
    new Produto(2, 'Teclado mecânico 60%', 349, 'teclados', 'Compacto, com luz RGB e cabo USB-C.', 'images/produtos/teclado.jpg', 15),
    new Produto(3, 'Mouse gamer sem fio', 189.9, 'mouses', 'Pesa só 60 g e a bateria dura até 70 horas.', 'images/produtos/mouse.jpg', 20),
    new Produto(4, 'Watercooler 360 mm', 599, 'refrigeração', 'Três ventoinhas, serve em Intel e AMD.', 'images/produtos/watercooler-360.jpg', 8),
    new Produto(5, 'Cooler de torre dupla', 279, 'refrigeração', 'Seis heatpipes e duas ventoinhas.', 'images/produtos/cooler.jpg', 12),
    new Produto(6, 'Headphone Bluetooth preto', 429, 'áudio', 'Cancela ruído e a bateria dura 40 horas.', 'images/produtos/headphone.jpg', 9),
    new Produto(7, 'Headphone de estúdio', 899, 'áudio', 'Acabamento em aço escovado e 60 horas de bateria.', 'images/produtos/headphone-estudio.jpg', 4),
    new Produto(8, 'Headphone Bluetooth bege', 399, 'áudio', 'Dobrável, com 35 horas de bateria.', 'images/produtos/headphone-bege.jpg', 7),
    new Produto(9, 'Watercooler 360 ARGB', 749, 'refrigeração', 'Luz ARGB e uma telinha na bomba.', 'images/produtos/watercooler.jpg', 6)
  ];

  carrinho: Carrinho = new Carrinho();

  escolherCategoria(categoria: string) {
    this.categoriaSelecionada = categoria;
  }

  quantidadeNoCarrinho(produto: Produto) {
    for (let item of this.carrinho.itens) {
      if (item.produto.id === produto.id) {
        return item.quantidade;
      }
    }
    return 0;
  }
}

