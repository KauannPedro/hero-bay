import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Contato } from './pages/contato/contato';
import { Sobre } from './pages/sobre/sobre';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'contato', component: Contato },
    { path: 'sobre', component: Sobre },
];