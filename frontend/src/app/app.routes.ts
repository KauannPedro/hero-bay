import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Hero Bay' },
  { path: 'login', component: LoginComponent, title: 'Entrar | Hero Bay' },
  { path: 'registrar', component: RegistrarComponent, title: 'Criar conta | Hero Bay' },
  { path: 'carrinho', component: CarrinhoComponent, title: 'Carrinho | Hero Bay' },
  { path: 'contato', component: ContatoComponent, title: 'Contato | Hero Bay' },
  { path: 'sobre', component: SobreComponent, title: 'Sobre | Hero Bay' },
  { path: 'admin', component: AdminComponent, title: 'Painel administrativo | Hero Bay' }
];
