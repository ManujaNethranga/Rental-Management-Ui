import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ManageComponent } from './components/manage/manage.component';

export const routes: Routes = [
    {
        path :"",
        component : HomeComponent
    },
    {
        path :"home",
        component : HomeComponent
    },
    {
        path :"register",
        component : RegisterComponent
    },
    {
        path : "manage",
        component : ManageComponent
    }
];
