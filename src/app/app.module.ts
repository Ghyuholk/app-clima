import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { TemperaturaComponent } from './components/temperatura/temperatura.component';
import { ChartModule } from 'primeng/chart';
import { HttpClientModule } from '@angular/common/http';
import { HumedadRelativaComponent } from './components/humedad-relativa/humedad-relativa.component';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    HumedadRelativaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HttpClientModule,
    DividerModule
  ],
  providers: [
    provideAnimationsAsync(),
        providePrimeNG({ 
            theme: {
                preset: Aura
            }
        })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
