import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonCard } from 'src/app/shared/models/Pokemon';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {
  pokemonsCardsList: Array<PokemonCard> = [];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pokemonsCardsList = this.activatedRoute.snapshot.data["pokemonList"].cards;
    console.log(this.pokemonsCardsList);
  }
}
