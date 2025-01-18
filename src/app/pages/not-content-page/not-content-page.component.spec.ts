import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotContentPageComponent } from './not-content-page.component';

describe('NotContentPageComponent', () => {
  let component: NotContentPageComponent;
  let fixture: ComponentFixture<NotContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotContentPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
