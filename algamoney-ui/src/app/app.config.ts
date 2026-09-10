import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';
import { routes } from './app.routes';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt-BR');

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f4f9fd',
      100: '#e8f3fb',
      200: '#c5e2f5',
      300: '#a2d0ef',
      400: '#5daddf',
      500: '#1e94d2',
      600: '#1a85bd',
      700: '#166f9e',
      800: '#12597e',
      900: '#0f4a69',
      950: '#0a3247'
    }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: 'none'
        }
      }
    }),
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
};
