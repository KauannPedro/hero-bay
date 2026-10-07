import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Carrinho } from '../../models/carrinho';
import { ItemCarrinho } from '../../models/item-carrinho';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {
  carrinho: Carrinho = new Carrinho();
  pedidoFinalizado: boolean = false;
  itensPedido: ItemCarrinho[] = [];
  totalPedido: number = 0;

  finalizarCompra() {
    this.itensPedido = this.carrinho.itens;
    this.totalPedido = this.carrinho.calcularTotal();
    this.carrinho.limpar();
    this.pedidoFinalizado = true;
  }
}
