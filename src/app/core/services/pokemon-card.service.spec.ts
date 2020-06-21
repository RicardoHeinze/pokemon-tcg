import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonCardService } from './pokemon-card.service';

describe('PokemonCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: PokemonCardService = TestBed.get(PokemonCardService);
    expect(service).toBeTruthy();
  });
});
