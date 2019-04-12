import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component ({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  errorLogin;

  user: UserModel = new UserModel();
  constructor(private authServices: AuthService, public router: Router) {}

  ngOnInit() {}
 signIn() {
   this.authServices.signIn(this.user).subscribe((data) => {
     if (data) {
       localStorage.setItem('token' , data.message);
       this.router.navigate(['list-transaction']);
       console.log (data);
     }
   }, (error) => {
     this.errorLogin = error.messages;
     console.log (error);
   });
 }
}
