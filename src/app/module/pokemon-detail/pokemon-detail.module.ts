import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailHeaderComponent } from './pokemon-detail-header/pokemon-detail-header.component';
import { PokemonDetailDescriptionRowComponent } from './pokemon-detail-description-row/pokemon-detail-description-row.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonDetailComponent
  }
]

@NgModule({
  declarations: [
    PokemonDetailComponent, 
    PokemonDetailHeaderComponent, 
    PokemonDetailDescriptionRowComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [PokemonDetailComponent]
})
export class PokemonDetailModule { }