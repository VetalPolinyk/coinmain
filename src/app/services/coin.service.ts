import {Injectable} from '@angular/core';
import {ApiService} from './api';

@Injectable()
export class CoinService {

  constructor(private api: ApiService) {}
  getListAssets() {
    return this.api.get(`get-assets`);
  }
  getListBinance() {
    return this.api.get(`account-binance`);
  }
}
