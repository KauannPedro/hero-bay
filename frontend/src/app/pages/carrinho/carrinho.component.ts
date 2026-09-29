import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarrinhoService } from '../../carrinho.service';

@Component({
  selector: 'app-carrinho',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css',
})
export class CarrinhoComponent {
  carrinho = inject(CarrinhoService);
}