import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: string = '';
  senha: string = '';
  botaoDesabilitado: boolean = true;
  mensagemErro: string = '';

  constructor(private router: Router) {}

  validarFormulario() {
    if (this.login.trim() !== '' && this.senha.trim() !== '') {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }
  }

  fazerLogin() {
    if (this.login === 'admin@email.com' && this.senha === '123') {
      localStorage.setItem('usuario', 'admin');
      this.router.navigate(['/admin']);
      return;
    }

    let usuarios: Usuario[] = [];
    const salvos = localStorage.getItem('usuarios');
    if (salvos) {
      usuarios = JSON.parse(salvos);
    }

    for (let usuario of usuarios) {
      if (usuario.email === this.login && usuario.senha === this.senha) {
        localStorage.setItem('usuario', usuario.nome);
        this.router.navigate(['/']);
        return;
      }
    }

    this.mensagemErro = 'E-mail ou senha incorretos.';
  }
}