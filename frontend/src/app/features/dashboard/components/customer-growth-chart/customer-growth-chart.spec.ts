import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGrowthChart } from './customer-growth-chart';

describe('CustomerGrowthChart', () => {
  let component: CustomerGrowthChart;
  let fixture: ComponentFixture<CustomerGrowthChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerGrowthChart],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerGrowthChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
