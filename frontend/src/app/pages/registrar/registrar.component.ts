import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  nome: string = '';
  login: string = '';
  senha: string = '';
  botaoDesabilitado: boolean = true;
  mensagemErro: string = '';

  constructor(private router: Router) {}

  validarFormulario() {
    if (this.nome.trim() !== '' && this.login.trim() !== '' && this.senha.trim() !== '') {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }
  }

  fazerCadastro() {
    const nome = this.nome.trim();

    if (nome === 'admin') {
      this.mensagemErro = 'Esse nome não pode ser usado.';
      return;
    }

    let usuarios: Usuario[] = [];
    const salvos = localStorage.getItem('usuarios');
    if (salvos) {
      usuarios = JSON.parse(salvos);
    }

    for (let usuario of usuarios) {
      if (usuario.email === this.login) {
        this.mensagemErro = 'Este e-mail já está cadastrado.';
        return;
      }
    }

    usuarios.push(new Usuario(nome, this.login, this.senha));
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('usuario', nome);
    this.router.navigate(['/']);
  }
}
