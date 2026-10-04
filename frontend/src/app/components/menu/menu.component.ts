import { Component } from '@angular/core';
import { AdminComponent } from '../../pages/admin/admin.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [AdminComponent, RouterLink, RouterLinkActive],
  selector: 'app-menu',
  styleUrl: './menu.component.css',
  templateUrl: './menu.component.html'
})
export class MenuComponent {}
