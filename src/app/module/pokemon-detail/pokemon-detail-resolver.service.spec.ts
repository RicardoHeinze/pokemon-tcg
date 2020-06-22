import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';

import { PokemonDetailResolverService } from './pokemon-detail-resolver.service';

describe('PokemonDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: PokemonDetailResolverService = TestBed.get(PokemonDetailResolverService);
    expect(service).toBeTruthy();
  });
});
