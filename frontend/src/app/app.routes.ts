import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'login', component: LoginComponent },
    {path: 'contato', component: ContatoComponent },
    {path: 'sobre', component: SobreComponent },
    {path: 'registrar', component: RegistrarComponent},
    {path: 'carrinho', component: CarrinhoComponent}
];