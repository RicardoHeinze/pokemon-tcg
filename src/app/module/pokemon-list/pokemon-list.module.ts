import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';

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
    LogoModule,
    RouterModule.forChild(routes)
  ],
  exports: [PokemonListComponent]
})
export class PokemonListModule { }
