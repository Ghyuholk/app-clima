import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemperaturaComponent } from './components/temperatura/temperatura.component';
import { HumedadRelativaComponent } from './components/humedad-relativa/humedad-relativa.component';

const routes: Routes = [
  {path:'temperatura', component: TemperaturaComponent},
  {path:'humedad-relativa', component: HumedadRelativaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
