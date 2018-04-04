import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import {HeroesComponent} from './heroes/heroes.component'
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

const appRouters: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouters);

