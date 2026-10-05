import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
// import { Usuario } from './'; quando o gustavo upar o codigo, terminar de importar o models usuario

interface Usuario {
  nome: string;
  email: string;
  senha: string;
} // apagar quando o gustavo upar
@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-registrar',
  styleUrl: './registrar.component.css',
  templateUrl: './registrar.component.html'
})
export class RegistrarComponent {
  botaoDesabilitado: boolean = true;
  login: string = '';
  nome: string = '';
  senha: string = '';

  constructor(private router: Router) { }

  validarFormulario() {
    if (this.login.trim() !== '' && this.senha.trim() !== '' && this.nome.trim() !== '') {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }
  }

  fazerCadastro() {
    const salvos = localStorage.getItem('usuarios');
    const usuarios: Usuario[] = salvos ? JSON.parse(salvos) : [];
    const existe = usuarios.some(verif => verif.email === this.login);

    if(existe){
      alert('Este e-mail já está cadastrado!');
      return;
    }

    usuarios.push({nome: this.nome, email: this.login, senha: this.senha});
 
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    
    alert('Cadastro realizado com sucesso!');
    this.router.navigate(['/login']); // manda para o login
  }
}
