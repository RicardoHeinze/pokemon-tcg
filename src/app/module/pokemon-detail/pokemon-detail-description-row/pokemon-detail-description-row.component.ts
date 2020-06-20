import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail-description-row',
  templateUrl: './pokemon-detail-description-row.component.html',
  styleUrls: ['./pokemon-detail-description-row.component.sass']
})
export class PokemonDetailDescriptionRowComponent implements OnInit {
  @Input() title: string;
  @Input() value: string | Array<string>;
  @Input() listValues: Array<Object>;
  objectKeys = Object.keys;
  isArray = Array.isArray;

  constructor() { }

  ngOnInit() {
  }
}
