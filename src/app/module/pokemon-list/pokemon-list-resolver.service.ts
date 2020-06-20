import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PokemonCard } from 'src/app/shared/models/Pokemon';
import { Observable } from 'rxjs';
import { PokemonCardService } from 'src/app/core/services/pokemon-card.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonListResolverService implements Resolve<PokemonCard[]> {

  constructor(private pokemonCardService: PokemonCardService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any[]{
    const pokemonName = route.params.name;
    
    if(pokemonName !== undefined || null)
      return this.pokemonCardService.getPokemonCardsListByName(pokemonName);

    else
      return this.pokemonCardService.getPokemonCardsPagedList();
  }
}
