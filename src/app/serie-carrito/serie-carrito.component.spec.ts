import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieCarritoComponent } from './serie-carrito.component';

describe('SerieCarritoComponent', () => {
  let component: SerieCarritoComponent;
  let fixture: ComponentFixture<SerieCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
