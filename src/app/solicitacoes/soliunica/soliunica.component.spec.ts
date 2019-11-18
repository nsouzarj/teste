import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoliunicaComponent } from './soliunica.component';

describe('SoliunicaComponent', () => {
  let component: SoliunicaComponent;
  let fixture: ComponentFixture<SoliunicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoliunicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoliunicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
