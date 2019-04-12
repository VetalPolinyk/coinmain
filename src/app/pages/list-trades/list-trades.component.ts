import {Component, OnInit} from '@angular/core';
import {CoinService} from '../../services/coin.service';
import {BinanceModel} from '../../models/binance.model';

@Component ({
  selector: 'app-list-trades',
  templateUrl: './list-trades.component.html',
  styleUrls: ['./list-trades.component.css']
})
export class ListTradesComponent implements OnInit {
  constructor(private coinServices: CoinService) {}
  public listBInance: BinanceModel[] = [];
  p;
  total;
  ngOnInit() {
    this.getListAssets();
  }
 getListAssets() {
     this.coinServices.getListAssets().subscribe((data) => {
       if (data) {
         this.listBInance = data;
         console.log (data);
       }
     });
 }
}
