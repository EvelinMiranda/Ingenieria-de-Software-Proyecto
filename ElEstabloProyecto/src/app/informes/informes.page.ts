import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-informes',
  templateUrl: './informes.page.html',
  styleUrls: ['./informes.page.scss'],
})
export class InformesPage implements OnInit {
  private investmentChart: Chart;

  constructor() { }

  ngOnInit() {
    this.generarCharts2();
  }

  generarCharts2(){
    const ctx = 'chart-principal';
    this.investmentChart = new Chart( ctx, {
      type: 'line',
      data: {
          labels: [ 'Julio', 'Agosto', 'Septiembre','Octubre','Noviembre','Diciembre'],
          datasets: [{
              label: 'Consumo de concentrado',
              
              data: [120, 190, 300, 500, 200, 300],
             
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
   });
  
    

  }

}
