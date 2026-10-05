import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ContatoComponent } from './pages/contato/contato.component'; /*Inserção das importações das paginas component*/
import { SobreComponent } from './pages/sobre/sobre.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'carrinho', component: CarrinhoComponent},
    { path: 'registrar', component: RegistrarComponent},
    { path: 'admin', component: AdminComponent},
];