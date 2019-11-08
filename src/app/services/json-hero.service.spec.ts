import { TestBed } from '@angular/core/testing';

import { JsonHeroService } from './json-hero.service';

describe('JsonHeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonHeroService = TestBed.get(JsonHeroService);
    expect(service).toBeTruthy();
  });
});
