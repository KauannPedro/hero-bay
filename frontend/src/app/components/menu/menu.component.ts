import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Carrinho } from '../../models/carrinho';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  itensMenu = [
    { label: 'Início', link: '/' },
    { label: 'Sobre', link: '/sobre' },
    { label: 'Contato', link: '/contato' }
  ];

  constructor(private router: Router) {}

  usuarioLogado() {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      return usuario;
    }
    return '';
  }

  itensNoCarrinho() {
    const carrinho = new Carrinho();
    return carrinho.contarItens();
  }

  sair() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }
}
