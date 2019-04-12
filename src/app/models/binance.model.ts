export class BinanceModel {

  assetCode: string;
  assetName: string;
  commissionRate: number;
  confirmTimes: number;
  enableWithdraw: boolean;
  freeAuditWithdrawAmt: number;
  freeUserChargeAmount: number;
  id: number;
  isLegalMoney: boolean;
  legalMoney: boolean;
  minProductWithdraw: number;
  unit: number;
  transactionFee;
  withdrawIntegerMultiple: number;
  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
