import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail-header',
  templateUrl: './pokemon-detail-header.component.html',
  styleUrls: ['./pokemon-detail-header.component.sass']
})
export class PokemonDetailHeaderComponent implements OnInit {
  @Input() name: string;
  @Input() types: Array<string>;

  constructor() { }

  ngOnInit() {
  }

  getHeaderBackground(): string {
    if(this.types)
      return this.types[0].toLocaleLowerCase();
  }
}
