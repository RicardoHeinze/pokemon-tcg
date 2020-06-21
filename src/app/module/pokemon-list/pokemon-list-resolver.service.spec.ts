import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { PokemonListResolverService } from './pokemon-list-resolver.service';

describe('PokemonListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: PokemonListResolverService = TestBed.get(PokemonListResolverService);
    expect(service).toBeTruthy();
  });
});
