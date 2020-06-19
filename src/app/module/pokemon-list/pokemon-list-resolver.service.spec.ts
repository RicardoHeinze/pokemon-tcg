import { TestBed } from '@angular/core/testing';

import { PokemonListResolverService } from './pokemon-list-resolver.service';

describe('PokemonListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonListResolverService = TestBed.get(PokemonListResolverService);
    expect(service).toBeTruthy();
  });
});
