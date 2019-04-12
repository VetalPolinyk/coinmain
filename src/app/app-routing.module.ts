import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {ListTradesComponent} from './pages/list-trades/list-trades.component';
import {AuthGuard} from './guards_for_routes/auth_guard';

const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'list-transaction', component: ListTradesComponent , canActivate: [AuthGuard] },
  { path: '', component: SignUpComponent},
  { path: '**', component: SignUpComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
