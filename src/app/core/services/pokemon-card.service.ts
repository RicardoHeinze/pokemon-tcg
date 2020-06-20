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

  getPokemonCardsList(): Observable<HttpResponse<any>> {
    return this.httpClient.get<Observable<HttpResponse<any>>>(`${this.API}cards`, { observe: 'response'});
  }

  getPokemonCardsPagedList(page: number = 1, pageSize: number = 1000): Observable<HttpResponse<any>> {
    return this.httpClient.get<Observable<HttpResponse<any>>>(`${this.API}cards?page=${page}&pageSize=${pageSize}`, { observe: 'response'});
  }

  getPokemonCardsListByName(name: string, pageSize: number = 1000): Observable<HttpResponse<any>> {
    return this.httpClient.get<Observable<HttpResponse<any>>>(`${this.API}cards?name=${name}&pageSize=${pageSize}`, { observe: 'response'});
  }

  getPokemonCardByID(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.API}cards/${id}`);
  }
}
