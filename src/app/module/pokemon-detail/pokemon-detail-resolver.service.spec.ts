import { TestBed } from '@angular/core/testing';

import { PokemonDetailResolverService } from './pokemon-detail-resolver.service';

describe('PokemonDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonDetailResolverService = TestBed.get(PokemonDetailResolverService);
    expect(service).toBeTruthy();
  });
});
