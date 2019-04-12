import {Injectable} from '@angular/core';
import {ApiService} from './api';

@Injectable()
export class AuthService  {

  constructor(private api: ApiService) {}
  signUp(user) {
    return this.api.post(`registration`, user);
  }
  signIn(user) {
    return this.api.post(`login`, user);
  }
  getUser() {
    return this.api.get(`me`);
  }
}
