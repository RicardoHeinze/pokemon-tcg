import { Component, OnInit, Input } from '@angular/core';
import { PokemonCard } from 'src/app/shared/models/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonCard: PokemonCard = null;

  constructor() { }

  ngOnInit() {
  }

}
