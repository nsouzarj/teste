import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadprocessosComponent } from './cadprocessos.component';

describe('CadprocessosComponent', () => {
  let component: CadprocessosComponent;
  let fixture: ComponentFixture<CadprocessosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadprocessosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadprocessosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
