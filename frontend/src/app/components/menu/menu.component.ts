// Traz o Component (para criar o componente) e o signal (a "caixinha" que avisa a tela quando muda)
import { Component, signal } from '@angular/core';

// NavigationEnd: evento de "terminou de trocar de página"
// Router: controla a navegação entre páginas
// RouterLink: faz o routerLink="/login" funcionar no HTML
import { NavigationEnd, Router, RouterLink } from '@angular/router';

// filter: deixa passar só os eventos que interessam
import { filter } from 'rxjs';

// Configuração do componente
@Component({
  selector: 'app-menu',              // nome da tag HTML: <app-menu></app-menu>
  standalone: true,                  // funciona sozinho, sem módulo
  imports: [RouterLink],             // o que o HTML deste componente pode usar
  templateUrl: './menu.component.html',  // arquivo do HTML
  styleUrl: './menu.component.css'       // arquivo do CSS
})
export class MenuComponent {

  // Cria o signal "usuario".
  // <string | null> significa que ele guarda um texto OU nada (null).
  // O valor inicial vem do localStorage: se já tiver alguém logado, começa com o nome,
  // senão começa com null.
  usuario = signal<string | null>(localStorage.getItem('usuario'));

  // O constructor roda uma vez, quando o menu é criado.
  // "private router: Router" pede ao Angular o Router e guarda em this.router
  constructor(private router: Router) {

    // router.events é a "rádio" que transmite tudo que acontece na navegação
    this.router.events
      // pipe: coloca um filtro antes de receber os eventos
      // Aqui só passa o evento NavigationEnd (terminou de trocar de página)
      .pipe(filter(evento => evento instanceof NavigationEnd))
      // subscribe: "me avise quando chegar um evento".
      // O código dentro das chaves roda toda vez que uma navegação termina
      .subscribe(() => {
        // Lê o localStorage de novo e atualiza o signal.
        // Como o signal mudou, a tela atualiza sozinha.
        console.log('navegação terminou, lendo localStorage');  // 3. o menu percebeu?
        this.usuario.set(localStorage.getItem('usuario'));
        console.log('usuario agora vale:', this.usuario());
      });
  }

  // Método chamado quando o usuário clica em "Sair"
  logout() {
    localStorage.removeItem('usuario');  // 1. apaga o usuário salvo no navegador
    this.usuario.set(null);              // 2. muda o signal para null (menu volta ao estado deslogado)
    this.router.navigate(['/']);         // 3. leva o usuário para a home
  }
}