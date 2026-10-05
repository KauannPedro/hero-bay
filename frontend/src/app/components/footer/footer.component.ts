import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // <--- IMPORTANTE!

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink], // <--- ADICIONAR RouterLink AQUI!
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {}