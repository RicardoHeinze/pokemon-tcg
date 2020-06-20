import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonCard } from 'src/app/shared/models/Pokemon';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {
  pokemonCardList: Array<PokemonCard> = [];
  renderedPokemonCardList: Array<PokemonCard> = [];

  snapshotData: HttpResponse<any>;
  currentPage = 1;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.snapshotData = this.activatedRoute.snapshot.data.pokemonCardList;
    this.pokemonCardList = this.snapshotData.body["cards"];

    this.sortArrayByName(this.pokemonCardList);
    this.renderedPokemonCardList = this.pokemonCardList.splice(0, 100);
  }

  loadMorePokemonCards(): void {
    this.currentPage = this.currentPage + 1;

    if (this.pokemonCardList.length <= 0)
      return;

    this.renderedPokemonCardList = this.renderedPokemonCardList.concat(this.pokemonCardList.splice(0, 100));
  }

  sortArrayByName(array: any[]): void {
    array.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }
}
