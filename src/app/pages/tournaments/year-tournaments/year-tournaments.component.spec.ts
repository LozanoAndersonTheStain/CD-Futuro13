import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearTournamentsComponent } from './year-tournaments.component';

describe('YearTournamentsComponent', () => {
  let component: YearTournamentsComponent;
  let fixture: ComponentFixture<YearTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearTournamentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(YearTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
