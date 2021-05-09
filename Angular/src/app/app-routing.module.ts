import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { RegisterComponent } from './components/user/register/register.component';
import { NgModule, Component } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './auth/auth.guard';






const routes:Routes=[
   {path:'',
   redirectTo:'login',pathMatch:'full'},
   {
    path: 'register', component: UserComponent,
    children: [{ path: '', component: RegisterComponent }]
},
{
    path: 'login', component: UserComponent,
    children: [{ path: '', component: LoginComponent }]
},
    {path:'Shop',component:ShoppingCartComponent,canActivate:[AuthGuard]},
    {path:'**',component:PageNotFoundComponent }
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutinModule{

}