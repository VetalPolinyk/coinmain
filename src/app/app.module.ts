import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {HeaderComponent} from './components/header.component';
import {AuthGuard} from './guards_for_routes/auth_guard';
import {ListTradesComponent} from './pages/list-trades/list-trades.component';
import {ApiService} from './services/api';
import {AuthService} from './services/auth.service';
import {FormsModule} from '@angular/forms';
import {CoinService} from './services/coin.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    ListTradesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule, NgxPaginationModule
  ],
  providers: [AuthGuard, ApiService, AuthService,  CoinService, HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
