import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrocolaboradorComponent } from './cadastrocolaborador.component';

describe('CadastrocolaboradorComponent', () => {
  let component: CadastrocolaboradorComponent;
  let fixture: ComponentFixture<CadastrocolaboradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrocolaboradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrocolaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
