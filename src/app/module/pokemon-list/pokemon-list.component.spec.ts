import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PokemonListComponent } from './pokemon-list.component';
import { SearchBarComponent } from 'src/app/shared/components/search-bar/search-bar.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PokemonListComponent, 
        SearchBarComponent,
        PokemonCardComponent
      ],
      imports: [ 
        InfiniteScrollModule,
        ReactiveFormsModule,
        MatInputModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
