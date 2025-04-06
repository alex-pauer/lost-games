import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NintendoPageComponent } from './nintendo-page.component';

describe('NintendoPageComponent', () => {
  let component: NintendoPageComponent;
  let fixture: ComponentFixture<NintendoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NintendoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NintendoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
