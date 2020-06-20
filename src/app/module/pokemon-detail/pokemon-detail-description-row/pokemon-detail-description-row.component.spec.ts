import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailDescriptionRowComponent } from './pokemon-detail-description-row.component';

describe('PokemonDetailDescriptionRowComponent', () => {
  let component: PokemonDetailDescriptionRowComponent;
  let fixture: ComponentFixture<PokemonDetailDescriptionRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailDescriptionRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailDescriptionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
