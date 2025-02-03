import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsPlayersComponent } from './testimonials-players.component';

describe('TestimonialsPlayersComponent', () => {
  let component: TestimonialsPlayersComponent;
  let fixture: ComponentFixture<TestimonialsPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsPlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
