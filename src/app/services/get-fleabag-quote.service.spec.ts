import { TestBed } from '@angular/core/testing';

import { GetFleabagQuoteService } from './get-fleabag-quote.service';

describe('GetFleabagQuoteService', () => {
  let service: GetFleabagQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFleabagQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
