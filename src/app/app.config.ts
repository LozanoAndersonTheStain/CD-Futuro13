import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideFirebaseApp, initializeApp, getApp, getApps } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { ButtonReturnComponent } from './components/button-return/button-return.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideFirebaseApp(() => {
      if (!getApps().length) {
        return initializeApp(environment.firebase);
      } else {
        return getApp();
      }
    }),
    provideDatabase(() => getDatabase()),
    ButtonReturnComponent
  ]
};
