import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComarcasComponent } from './comarcas.component';

describe('ComarcasComponent', () => {
  let component: ComarcasComponent;
  let fixture: ComponentFixture<ComarcasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComarcasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
