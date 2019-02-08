import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { 
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent
 } from "@nebular/auth";
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children:[
      {
        path: '',
        component: NbLoginComponent
      },
      {
        path: 'login',
        component: NbLoginComponent
      },
      {
        path: 'register',
        component: NbRegisterComponent
      },
      {
        path: 'logout',
        component: NbLogoutComponent
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
