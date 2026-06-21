import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { barChartOptions, DonutChartOptions } from '../../models/chart-options.type';

@Component({
  selector: 'app-risk-distribution-chart',
  imports: [NgApexchartsModule],
  templateUrl: './risk-distribution-chart.html',
  styleUrl: './risk-distribution-chart.scss',
})

export class RiskDistributionChart {
   chartOptions : DonutChartOptions  = {
    series: [44, 55, 13, 43, 22],
    chart: {
      type: 'donut',
    },
    labels: ['High Risk', 'Medium Risk', 'Low Risk', 'No Risk', 'Unknown'],
    legend: {
      show: true,
      position: 'right',
    },
   
  };

 
}
