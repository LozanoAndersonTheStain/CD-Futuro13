import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsSliderComponent } from './sponsors-slider.component';

describe('SponsorsSliderComponent', () => {
  let component: SponsorsSliderComponent;
  let fixture: ComponentFixture<SponsorsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorsSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
