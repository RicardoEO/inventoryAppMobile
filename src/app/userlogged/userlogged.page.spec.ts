import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserloggedPage } from './userlogged.page';

describe('UserloggedPage', () => {
  let component: UserloggedPage;
  let fixture: ComponentFixture<UserloggedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserloggedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
