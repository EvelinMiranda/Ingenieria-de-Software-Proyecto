import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  private investmentChart: Chart;

  constructor() { }

  ngOnInit() {
    this.generarChartsDashboard();
  }
  generarChartsDashboard(){
    const ctx = 'chart-dashboard';
    this.investmentChart = new Chart( ctx, {
      type: 'line',
      data: {
          labels: [ 'Julio', 'Agosto', 'Septiembre','Octubre','Noviembre','Diciembre'],
          datasets: [{
              label: 'Producción lechera de la finaca',
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
