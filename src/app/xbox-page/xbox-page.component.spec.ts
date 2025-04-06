import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxPageComponent } from './xbox-page.component';

describe('XboxPageComponent', () => {
  let component: XboxPageComponent;
  let fixture: ComponentFixture<XboxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XboxPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XboxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
