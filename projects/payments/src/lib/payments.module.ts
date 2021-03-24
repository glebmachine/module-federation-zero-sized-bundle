import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule, AuthService } from '@namespace/auth';
import { PaymentsComponent } from './payments.component';

@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    AuthModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: PaymentsComponent,
      }
    ])
  ],
  providers: [AuthService]
})
export class PaymentsModule {

}
