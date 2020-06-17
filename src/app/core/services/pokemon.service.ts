import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonCard } from 'src/app/shared/models/Pokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  API = 'https://api.pokemontcg.io/v1/';

  constructor(private http: HttpClient) { }

  getPokemonsCardsList(): Observable<PokemonCard[]> {
    return this.http.get<PokemonCard[]>(this.API + 'cards');
  }
}
