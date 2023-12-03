import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacaoComponent } from './navegacao.component';

describe('NavegacaoComponent', () => {
  let component: NavegacaoComponent;
  let fixture: ComponentFixture<NavegacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavegacaoComponent]
    });
    fixture = TestBed.createComponent(NavegacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
