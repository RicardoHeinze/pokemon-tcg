import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

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
    MatTableModule,
    RouterModule.forChild(routes)
  ],
  exports: [PokemonListComponent]
})
export class PokemonListModule { }
