import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieFavoritasComponent } from './serie-favoritas.component';

describe('SerieFavoritasComponent', () => {
  let component: SerieFavoritasComponent;
  let fixture: ComponentFixture<SerieFavoritasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieFavoritasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
