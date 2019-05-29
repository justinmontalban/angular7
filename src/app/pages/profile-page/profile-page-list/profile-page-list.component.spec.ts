import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageListComponent } from './profile-page-list.component';

describe('ProfilePageListComponent', () => {
  let component: ProfilePageListComponent;
  let fixture: ComponentFixture<ProfilePageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
