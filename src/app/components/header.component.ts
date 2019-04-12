import {Component, OnInit} from '@angular/core';
import {CoinService} from '../services/coin.service';
import {AuthService} from '../services/auth.service';
import {UserModel} from '../models/user.model';

@Component ({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private coinServices: CoinService, private authServices: AuthService) {}
 user: UserModel = new UserModel();
  balance;
  ngOnInit() {
    this. getUser();
    this.getBinance();
  }
  getBinance() {
    this.coinServices.getListBinance().subscribe((data) => {
      if (data) {
        this.balance = data.buyerCommission;
        console.log (data);
      }
    });
  }
  getUser() {
    this.authServices.getUser().subscribe((data) => {
      if (data) {
        this.user = data;
      }
    });
  }
}
