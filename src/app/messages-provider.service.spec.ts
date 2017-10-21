import { TestBed, inject } from '@angular/core/testing';

import { MessagesProviderService } from './messages-provider.service';

describe('MessagesProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesProviderService]
    });
  });

  it('should be created', inject([MessagesProviderService], (service: MessagesProviderService) => {
    expect(service).toBeTruthy();
  }));
});
