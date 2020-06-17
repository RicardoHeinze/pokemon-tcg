import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonResolverService } from './module/pokemon-list/pokemon-resolver.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lista'
  },
  { 
    path: 'lista',
    loadChildren: () => import('./module/pokemon-list/pokemon-list.module').then(m => m.PokemonListModule),
    resolve: { pokemonList : PokemonResolverService }
  },
  { 
    path: 'pokemon',
    loadChildren: () => import('./module/pokemon-detail/pokemon-detail.module').then(m => m.PokemonDetailModule)
  },
  {
    path: '**',
    loadChildren: () => import('./module/error/error.module').then(m => m.ErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
