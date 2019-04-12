import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {AuthService} from '../../services/auth.service';

@Component ({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: UserModel = new UserModel();
  errorRegister;
  constructor(private authServices: AuthService) {}

  ngOnInit() {
  }

  signUp() {
    console.log (this.user);
    this.authServices.signUp(this.user).subscribe((data) => {
      if (data) {
       console.log (data);
      }
    }, (error) => {
      console.log (error);
      if (error.httpCode === 400) {
        this.errorRegister = error.message[0];
      } else {
        this.errorRegister = error.message;
      }
    });
 }
}
