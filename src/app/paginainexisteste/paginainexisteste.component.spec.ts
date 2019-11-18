import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginainexistesteComponent } from './paginainexisteste.component';

describe('PaginainexistesteComponent', () => {
  let component: PaginainexistesteComponent;
  let fixture: ComponentFixture<PaginainexistesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginainexistesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginainexistesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
