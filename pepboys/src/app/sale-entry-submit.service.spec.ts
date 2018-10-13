import { TestBed } from '@angular/core/testing';

import { SaleEntrySubmitService } from './sale-entry-submit.service';

describe('SaleEntrySubmitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaleEntrySubmitService = TestBed.get(SaleEntrySubmitService);
    expect(service).toBeTruthy();
  });
});
