import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonCard } from 'src/app/shared/models/Pokemon';
import { first } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {
  pokemonsCardsList: Array<PokemonCard> = [];
  snapshotData: HttpResponse<any>;
  totalCards: string;
  pageSize: string;
  count: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.snapshotData = this.activatedRoute.snapshot.data.data;

    this.totalCards = this.snapshotData.headers.get('total-count');
    this.pageSize = this.snapshotData.headers.get('page-size');
    this.count = this.snapshotData.headers.get('count');
    this.pokemonsCardsList = this.snapshotData.body["cards"];

  }
}
