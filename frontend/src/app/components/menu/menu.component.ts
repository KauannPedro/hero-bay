import { Component } from '@angular/core';
import { AdminComponent } from '../../pages/admin/admin.component';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [AdminComponent, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent { }
