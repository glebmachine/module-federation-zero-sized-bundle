import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';


// const providersMap = new Map<any, any>();

// function sharedFactoryProvider(provider: FactoryProvider): FactoryProvider {
//   return {
//     provide: provider.provide,
//     deps: provider.deps,
//     useFactory: (...args) => {
//       const target = providersMap.get(provider.provide);
//       if (target) {
//         return target;
//       }

//       const created = provider.useFactory(...args);
//       providersMap.set(provider.provide, created);
//       return created;
//     }
//   }
// }

@NgModule({
  declarations: [AuthComponent],
  exports: [AuthComponent],
})
export class AuthModule { 
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        // sharedFactoryProvider({
        //   provide: AuthService,
        //   useFactory: () => new AuthService(),
        // }),
        AuthService
    ]
    }
  }
}
