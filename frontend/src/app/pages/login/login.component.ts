import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login: string = '';  
  senha: string = '';
  botaoDesabilitado: boolean = true; 
  
  constructor(private router: Router) {}

  validarFormulario() {
    if (this.login.trim() !== '' && this.senha.trim() !== '') {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }
  }

  fazerLogin() {
    if (this.login && this.senha) {
      console.log('Login realizado com sucesso!');
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Por favor, preencha todos os campos.');
    }
  }
}