import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrocomarcaComponent } from './cadastrocomarca.component';

describe('CadastrocomarcaComponent', () => {
  let component: CadastrocomarcaComponent;
  let fixture: ComponentFixture<CadastrocomarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrocomarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrocomarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
