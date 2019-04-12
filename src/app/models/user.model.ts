export class UserModel {
  ID: number;
  age: number;
  name: string;
  email: number;
  password;
  constructor(values: object = {}) {
  Object.assign(this, values);
}
}
