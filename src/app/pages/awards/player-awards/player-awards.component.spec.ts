import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAwardsComponent } from './player-awards.component';

describe('PlayerAwardsComponent', () => {
  let component: PlayerAwardsComponent;
  let fixture: ComponentFixture<PlayerAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerAwardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
