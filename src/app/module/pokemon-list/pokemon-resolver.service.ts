import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PokemonCard } from 'src/app/shared/models/Pokemon';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolverService implements Resolve<PokemonCard[]> {

  constructor(private pokemonService: PokemonService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PokemonCard []> | Promise<PokemonCard[]> | PokemonCard[]{
    return this.pokemonService.getPokemonsCardsList();
  }
}
