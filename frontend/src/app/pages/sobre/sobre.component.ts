import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-sobre',
  styleUrl: './sobre.component.css',
  templateUrl: './sobre.component.html'
})
export class SobreComponent {numeros = [
    { destaque: '+2.000', legenda: 'Produtos', icone: 'caixa' },
    { destaque: '+500', legenda: 'Cidades atendidas', icone: 'pin' },
    { destaque: '+10 mil', legenda: 'Clientes', icone: 'cliente' },
    { destaque: '+30 mil', legenda: 'Pedidos entregues', icone: 'pedido' },
  ];
}
