import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './common/about/about';
import { Contact } from './common/contact/contact';
import { Customer } from './common/customer/customer';
import { Add } from './common/add/add';
import { Status } from './common/status/status';
import { authGuard } from './Guard/auth-guard';
import { childAuthGuard } from './Guard/child-auth-guard';
import { authdGuard } from './Guard/authd-guard';
import { Login } from './common/login/login';
import { Register } from './common/register/register';
import { ProductComponent } from './common/product/product';

export const routes: Routes = [
    {
        path: '', component: Home
    },
    {
        path: 'about', component: About, canActivate: [authGuard],
    },
    {
        path: 'login', component: Login
    },
    {
        path: 'register', component: Register
    },
    {
        path: 'about/:sub/:id', component: About
    },
    {
        path: 'contact', loadComponent: () => import('./common/contact/contact').then(m => m.Contact),
    },
    {
        path: 'customer', component: Customer,
        canActivate: [authGuard],
        canActivateChild: [childAuthGuard],
        canDeactivate: [authdGuard],
        children: [
            {
                path: 'add', component: Add,
            },
            {
                path: 'edit/:id', component: Add,
            }
        ]
    },
    {
        path: 'product', component: ProductComponent, canActivate: [authGuard],
    },
    {
        path: '**', component: Status
    }
];
