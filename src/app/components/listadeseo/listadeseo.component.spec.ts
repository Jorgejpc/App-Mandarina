import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadeseoComponent } from './listadeseo.component';

describe('ListadeseoComponent', () => {
  let component: ListadeseoComponent;
  let fixture: ComponentFixture<ListadeseoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadeseoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadeseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
