import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacliComponent } from './listacli.component';

describe('ListacliComponent', () => {
  let component: ListacliComponent;
  let fixture: ComponentFixture<ListacliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
