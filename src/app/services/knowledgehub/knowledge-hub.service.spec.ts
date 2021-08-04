import { TestBed } from '@angular/core/testing';

import { KnowledgeHubService } from './knowledge-hub.service';

describe('KnowledgeHubService', () => {
  let service: KnowledgeHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnowledgeHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
