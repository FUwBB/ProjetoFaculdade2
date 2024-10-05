import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerceiraPage } from './terceira.page';

describe('TerceiraPage', () => {
  let component: TerceiraPage;
  let fixture: ComponentFixture<TerceiraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
