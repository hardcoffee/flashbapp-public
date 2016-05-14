import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {MainComponent} from './components/main/main.component';

bootstrap(MainComponent, [HTTP_PROVIDERS]);
