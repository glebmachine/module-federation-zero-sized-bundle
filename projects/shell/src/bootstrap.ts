import { loadRemoteEntry } from '@angular-architects/module-federation';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

Promise.all([
  loadRemoteEntry('http://localhost:3001/remoteEntry.js', 'payments')
])
  .catch(err => console.error('Error loading remote entries', err))
  .then(() => platformBrowserDynamic().bootstrapModule(AppModule))
  .catch(err => console.error(err));
