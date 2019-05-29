import { TestBed } from '@angular/core/testing';

import { ProfilePageResolver } from './profile-page-resolver.';

describe('ProfilePageResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfilePageResolver = TestBed.get(ProfilePageResolver);
    expect(service).toBeTruthy();
  });
});
