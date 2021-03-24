import { Component } from '@angular/core';
import { AuthService } from '@namespace/auth';

@Component({
  selector: 'app-payments',
  template: '<h1>Я есть компонент, я есть платежки</h1>'
})
export class PaymentsComponent {
  constructor(
    private auth: AuthService,
  ) {
    console.log('get', this.auth.getValue());
  }
}
