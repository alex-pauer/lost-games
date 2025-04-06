import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcPageComponent } from './pc-page.component';

describe('PcPageComponent', () => {
  let component: PcPageComponent;
  let fixture: ComponentFixture<PcPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

function expect(component: PcPageComponent) {
  throw new Error('Function not implemented.');
}

