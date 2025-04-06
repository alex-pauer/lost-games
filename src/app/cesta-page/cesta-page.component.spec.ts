import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaPageComponent } from './cesta-page.component';

describe('CestaPageComponent', () => {
  let component: CestaPageComponent;
  let fixture: ComponentFixture<CestaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CestaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CestaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
