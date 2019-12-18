import { TestBed } from '@angular/core/testing';

import { WhatsNewService } from './whats-new.service';

describe('WhatsNewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WhatsNewService = TestBed.get(WhatsNewService);
    expect(service).toBeTruthy();
  });
});
