import { TestBed } from '@angular/core/testing';

import { AddempService } from './addemp.service';

describe('AddempService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddempService = TestBed.get(AddempService);
    expect(service).toBeTruthy();
  });
});
