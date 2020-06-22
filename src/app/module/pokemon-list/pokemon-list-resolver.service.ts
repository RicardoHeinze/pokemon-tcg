import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { PokemonCardService } from 'src/app/core/services/pokemon-card.service';

import { PokemonCard } from 'src/app/shared/models/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonListResolverService implements Resolve<HttpResponse<PokemonCard>> {

  constructor(private pokemonCardService: PokemonCardService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<HttpResponse<PokemonCard>> | Promise<HttpResponse<PokemonCard>> | HttpResponse<PokemonCard> {
    const pokemonName = route.params.name;

    if (pokemonName !== undefined || null)
      return this.pokemonCardService.getPokemonCardsListByName(pokemonName);

    else
      return this.pokemonCardService.getPokemonCardsPagedList();
  }
}
