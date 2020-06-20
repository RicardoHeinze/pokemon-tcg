import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SearchBarModule } from 'src/app/shared/components/search-bar/search-bar.module';
import { PokemonCardModule } from './pokemon-card/pokemon-card.module';

import { PokemonListComponent } from './pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent
  }
]

@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    SearchBarModule,
    PokemonCardModule,
    InfiniteScrollModule,
    RouterModule.forChild(routes)
  ],
  exports: [PokemonListComponent]
})
export class PokemonListModule { }
