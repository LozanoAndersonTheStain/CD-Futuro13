import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FathersComponent } from './fathers.component';

describe('FathersComponent', () => {
  let component: FathersComponent;
  let fixture: ComponentFixture<FathersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FathersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FathersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
