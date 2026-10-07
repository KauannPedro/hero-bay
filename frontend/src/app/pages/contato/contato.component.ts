import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  nome: string = '';
  email: string = '';
  mensagem: string = '';
  botaoDesabilitado: boolean = true;
  mensagemEnviada: boolean = false;

  validarFormulario() {
    if (this.nome.trim() !== '' && this.email.trim() !== '' && this.mensagem.trim() !== '') {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }
  }

  enviarMensagem() {
    this.mensagemEnviada = true;
  }

  novaMensagem() {
    this.nome = '';
    this.email = '';
    this.mensagem = '';
    this.botaoDesabilitado = true;
    this.mensagemEnviada = false;
  }
}
