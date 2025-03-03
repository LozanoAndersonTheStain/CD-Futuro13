import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RudePiggyComponent } from './rude-piggy.component';

describe('RudePiggyComponent', () => {
  let component: RudePiggyComponent;
  let fixture: ComponentFixture<RudePiggyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RudePiggyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RudePiggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
