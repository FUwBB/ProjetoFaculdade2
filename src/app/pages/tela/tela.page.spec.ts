import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaPage } from './tela.page';

describe('TelaPage', () => {
  let component: TelaPage;
  let fixture: ComponentFixture<TelaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
