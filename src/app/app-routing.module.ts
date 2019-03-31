import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

/*
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from './pages/auth/components/auth-block';

import {
  NbAuthComponent
} from './pages/auth/components/auth.component';
import {
  NbLoginComponent
} from './pages/auth/components/login/login.component';
import {
  NbLogoutComponent
} from './pages/auth/components/logout/logout.component';
import {
  NbRegisterComponent
} from './pages/auth/components/register/register.component';
import {
  NbRequestPasswordComponent
} from './pages/auth/components/request-password/request-password.component';
import {
  NbResetPasswordComponent
} from './pages/auth/components/reset-password/reset-password.component';
import {
  NbAuthBlockComponent
} from './pages/auth/components/auth-block/auth-block.component';
*/

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
