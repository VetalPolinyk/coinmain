export class CONFIG {
  endpoint = 'https://mainecoins-back-test.herokuapp.com/';
  constructor(values: object = {}) {
    Object.assign(this, values);
  }

}
