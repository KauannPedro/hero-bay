import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { filter } from 'rxjs';



@Component({
  imports: [RouterOutlet, FooterComponent, MenuComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('frontend');
  // Signal que guarda se o menu deve aparecer. Começa como true (visível)
  mostrarMenu = signal(true);

  constructor(private router: Router) {

    this.router.events
      // Deixa passar só o evento "terminou de trocar de página".
      // "evento is NavigationEnd" avisa ao TypeScript que o evento tem a propriedade urlAfterRedirects
      .pipe(filter((evento): evento is NavigationEnd => evento instanceof NavigationEnd))
      .subscribe((evento) => {
        // urlAfterRedirects é o endereço atual, por exemplo "/login" ou "/carrinho"
        // startsWith('/login') confere se o endereço começa com "/login"
        // O ! inverte: se for login, mostrarMenu vira false
        const url = evento.urlAfterRedirects;
        this.mostrarMenu.set(!(url.startsWith('/login') || url.startsWith('/registrar')));
      });
  }
}
