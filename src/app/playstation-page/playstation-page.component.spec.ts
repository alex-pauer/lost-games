import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystationPageComponent } from './playstation-page.component';

describe('PlaystationPageComponent', () => {
  let component: PlaystationPageComponent;
  let fixture: ComponentFixture<PlaystationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaystationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaystationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
