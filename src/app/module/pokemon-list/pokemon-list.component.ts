import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonCard } from 'src/app/shared/models/Pokemon';
import { first } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { PokemonCardService } from 'src/app/core/services/pokemon-card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {
  pokemonsCardsList: Array<PokemonCard> = [];
  snapshotData: HttpResponse<any>;
  totalCards: number;
  pageSize: number;
  count: number;
  currentPage = 1;
  pokemonCardsListSubscribe: Subscription;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonCardService: PokemonCardService
  ) { }

  ngOnInit() {
    this.snapshotData = this.activatedRoute.snapshot.data.data;

    this.totalCards = parseInt(this.snapshotData.headers.get('total-count'));
    this.pokemonsCardsList = this.snapshotData.body["cards"];
  }

  loadMorePokemonCards(): void {
    this.currentPage = this.currentPage + 1;

    if(this.pokemonsCardsList.length > this.totalCards)
      return;
    
    this.pokemonCardsListSubscribe = this.pokemonCardService.getPokemonsCardsList(this.currentPage).pipe(first()).subscribe(httpResponse => {
      this.pokemonsCardsList = this.pokemonsCardsList.concat(httpResponse.body.cards);
      this.pokemonCardsListSubscribe.unsubscribe();
    })
  }
}
