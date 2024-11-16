import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphButtonComponent } from './graph-button.component';

describe('GraphButtonComponent', () => {
  let component: GraphButtonComponent;
  let fixture: ComponentFixture<GraphButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
