import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PokemonCardService } from 'src/app/core/services/pokemon-card.service';
import { PokemonCard } from 'src/app/shared/models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailResolverService implements Resolve<PokemonCard> {

  constructor(private pokemonCardService: PokemonCardService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<PokemonCard> | Promise<PokemonCard> | PokemonCard {
    const pokemonID = route.params.id;

    return this.pokemonCardService.getPokemonCardByID(pokemonID).pipe(map(pokemon => {
      return pokemon.card !== null ? pokemon.card : this.router.navigate(['/erro'])
    }));
  }
}
