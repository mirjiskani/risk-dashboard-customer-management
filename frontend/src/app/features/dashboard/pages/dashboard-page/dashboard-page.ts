import { Component } from '@angular/core';
import { StatCard } from '../../../../shared/components/stat-card/stat-card';
import { CustomerGrowthChart } from '../../components/customer-growth-chart/customer-growth-chart';
import { RiskDistributionChart } from '../../components/risk-distribution-chart/risk-distribution-chart';

@Component({
  selector: 'app-dashboard-page',
  imports: [StatCard, RiskDistributionChart, CustomerGrowthChart],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {}
