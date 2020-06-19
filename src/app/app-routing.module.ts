import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListResolverService } from './module/pokemon-list/pokemon-list-resolver.service';
import { PokemonDetailResolverService } from './module/pokemon-detail/pokemon-detail-resolver.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lista'
  },
  { 
    path: 'lista',
    loadChildren: () => import('./module/pokemon-list/pokemon-list.module').then(m => m.PokemonListModule),
    resolve: { data : PokemonListResolverService }
  },
  { 
    path: 'pokemon/:id',
    loadChildren: () => import('./module/pokemon-detail/pokemon-detail.module').then(m => m.PokemonDetailModule),
    resolve: { data : PokemonDetailResolverService }
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
