import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {MainComponent} from './components/main/main.component';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';
import { enableProdMode } from '@angular/core';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(MainComponent, [
    HTTP_PROVIDERS,
    FIREBASE_PROVIDERS,
    defaultFirebase('https://flashbapp.firebaseio.com')
]);
