import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PokemonCard } from 'src/app/shared/models/Pokemon';
import { Observable } from 'rxjs';
import { PokemonCardService } from 'src/app/core/services/pokemon-card.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonListResolverService implements Resolve<PokemonCard[]> {

  constructor(private pokemonCardService: PokemonCardService) { }

  resolve(): Observable<any> | Promise<any> | any[]{
    return this.pokemonCardService.getPokemonsCardsList();
  }
}
