import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonCardService } from 'src/app/core/services/pokemon-card.service';
import { PokemonCard } from 'src/app/shared/models/Pokemon';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailResolverService implements Resolve<PokemonCard> {

  constructor(private pokemonService: PokemonCardService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<PokemonCard> | Promise<PokemonCard> | PokemonCard{
    const pokemonID = route.params.id;
    
    return this.pokemonService.getCardByID(pokemonID).pipe(map(pokemon => {
      return pokemon.card !== null ? pokemon.card : this.router.navigate(['/erro'])
    }));
  }
}
