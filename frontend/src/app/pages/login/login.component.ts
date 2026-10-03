import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.component.css',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  
  constructor(private router: Router) {}

  fazerLogin() {
    if (this.email && this.senha) {
      console.log('Login realizado com sucesso!');
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Por favor, preencha todos os campos.');
    }
    if (this.email != '') {
      localStorage.setItem('email', this.email);
    }
    if (this.senha != '') {
      localStorage.setItem('senha', this.senha);
    }
  }
}
