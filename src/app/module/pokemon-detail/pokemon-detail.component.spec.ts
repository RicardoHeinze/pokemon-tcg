import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonDetailHeaderComponent } from './pokemon-detail-header/pokemon-detail-header.component';
import { PokemonDetailDescriptionRowComponent } from './pokemon-detail-description-row/pokemon-detail-description-row.component';


describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PokemonDetailComponent,
        PokemonDetailHeaderComponent,
        PokemonDetailDescriptionRowComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
