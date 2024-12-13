import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { GetDataClimaService } from '../../services/get-data-clima.service';
import { interval, switchMap } from 'rxjs';



@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrl: './temperatura.component.css'
})
export class TemperaturaComponent implements OnInit{

  data: any;
  dataService: any;

  options: any;



  constructor(
    private cd: ChangeDetectorRef,
    private getDataClimaService: GetDataClimaService
  ) {}



  ngOnInit() {
      this.initChart();
      this.getDataClimaService.getTemperatura().subscribe(
        res => {
            console.log(res,"datos Prueba");
        }, 
        err => {
          console.log(err);
        } 
        )
      interval(5000)
      .pipe(
        switchMap(async () => this.getDataClimaService.getTemperatura()) // Cambia el flujo al observable del servicio
      )
      .subscribe({
        next: (data) => {
          this.dataService = data;
          console.log('Datos actualizados:', this.data);
        },
        error: (err) => {
          console.error('Error al obtener datos:', err);
        },
      });
  }

  initChart() {
  
          const documentStyle = getComputedStyle(document.documentElement);
          const textColor = documentStyle.getPropertyValue('--p-text-color');

          this.data = {
              labels: ['Temperatura'],
              datasets: [
                  {
                      data: [this.dataService],
                      backgroundColor: [documentStyle.getPropertyValue('--p-cyan-500'), documentStyle.getPropertyValue('--p-orange-500'), documentStyle.getPropertyValue('--p-gray-500')],
                      hoverBackgroundColor: [documentStyle.getPropertyValue('--p-cyan-400'), documentStyle.getPropertyValue('--p-orange-400'), documentStyle.getPropertyValue('--p-gray-400')]
                  }
              ]
          };

          this.options = {
              cutout: '60%',
              plugins: {
                  legend: {
                      labels: {
                          color: textColor
                      }
                  }
              }
          };
          this.cd.markForCheck()
      
  }

}
