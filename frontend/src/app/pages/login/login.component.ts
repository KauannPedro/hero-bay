import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { verify } from 'crypto';
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
  
  constructor(private router: Router) {}

  validarFormulario() {
    if (this.login.trim() !== '' && this.senha.trim() !== '') {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }
  }

  fazerLogin() {
    const salvos = localStorage.getItem('usuarios');
    const usuarios = salvos ? JSON.parse(salvos) : [];
    
    const encontrado = usuarios.find((verif: Usuario) => verif.email === this.login && verif.senha === this.senha);

    if (this.login === "admin@email.com" && this.senha === "123") {
      alert("Bem-vindo(a) admin!");
      localStorage.setItem('usuario', 'admin');
      this.router.navigate(['/admin']);
    } else if (encontrado){
      localStorage.setItem('usuario', encontrado.nome);
      this.router.navigate(['/']);
    }
    else {
      alert('Credenciais inválidas!');
    }
  }
}