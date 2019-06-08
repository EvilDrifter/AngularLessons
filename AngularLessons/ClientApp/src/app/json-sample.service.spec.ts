import { TestBed, inject } from '@angular/core/testing';

import { JsonSampleService } from './json-sample.service';

describe('JsonSampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonSampleService]
    });
  });

  it('should be created', inject([JsonSampleService], (service: JsonSampleService) => {
    expect(service).toBeTruthy();
  }));
});
