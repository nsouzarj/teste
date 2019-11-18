import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancasComponent } from './bancas.component';

describe('BancasComponent', () => {
  let component: BancasComponent;
  let fixture: ComponentFixture<BancasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
