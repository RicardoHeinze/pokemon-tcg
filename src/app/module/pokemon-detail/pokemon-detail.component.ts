import { Component, OnInit } from '@angular/core';
import { PokemonCard } from 'src/app/shared/models/Pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.sass']
})
export class PokemonDetailComponent implements OnInit {
  pokemonCard: PokemonCard
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pokemonCard = this.activatedRoute.snapshot.data.data;
  }

  getHeaderBackground(): string {
    if(this.pokemonCard.types)
      return this.pokemonCard.types[0].toLocaleLowerCase();
  }
}
