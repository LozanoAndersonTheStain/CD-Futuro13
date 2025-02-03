import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsFathersComponent } from './testimonials-fathers.component';

describe('TestimonialsFathersComponent', () => {
  let component: TestimonialsFathersComponent;
  let fixture: ComponentFixture<TestimonialsFathersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsFathersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsFathersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
