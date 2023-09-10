import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RrhhPage } from './rrhh.page';

describe('RrhhPage', () => {
  let component: RrhhPage;
  let fixture: ComponentFixture<RrhhPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RrhhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
