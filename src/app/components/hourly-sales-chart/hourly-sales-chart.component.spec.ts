import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlySalesChartComponent } from './hourly-sales-chart.component';

describe('HourlySalesChartComponent', () => {
  let component: HourlySalesChartComponent;
  let fixture: ComponentFixture<HourlySalesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourlySalesChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HourlySalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
