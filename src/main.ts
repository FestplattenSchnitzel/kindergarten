/// <reference types="@angular/localize" />

import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import {useGeographic} from "ol/proj";

// use lon/lat
useGeographic();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
