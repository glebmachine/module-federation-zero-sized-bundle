import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, 
  {
    path: 'payments',
    loadChildren: () => 
      loadRemoteModule({
        // remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'payments',
        exposedModule: './Module'
      })
      .then(m => m.PaymentsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
