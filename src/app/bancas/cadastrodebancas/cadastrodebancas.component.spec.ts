import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrodebancasComponent } from './cadastrodebancas.component';

describe('CadastrodebancasComponent', () => {
  let component: CadastrodebancasComponent;
  let fixture: ComponentFixture<CadastrodebancasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrodebancasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrodebancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
