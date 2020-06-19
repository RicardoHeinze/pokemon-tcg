import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonCard } from 'src/app/shared/models/Pokemon';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonCardService {
  API = 'https://api.pokemontcg.io/v1/';

  constructor(private httpClient: HttpClient) { }

  getPokemonsCardsList(page: number = 1): Observable<HttpResponse<any>> {
    console.log(`${this.API}cards?page=${page}`);
    return this.httpClient.get<Observable<HttpResponse<any>>>(`${this.API}cards?page=${page}`, { observe: 'response'});
  }

  getPokemonCardByID(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.API}cards/${id}`);
  }
}
