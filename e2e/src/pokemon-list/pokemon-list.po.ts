import { browser, by, element } from 'protractor';

export class PokemonListPage {
  navigateTo() {
    return browser.get('/busca') as Promise<any>;
  }

  getPokemonCardElements() {
    return element.all(by.css('.pokemon-card'));
  }

  getFirstPokemonCardElement() {
    return element(by.css('.pokemon-card:first-of-type .img-wrapper'));
  }

  getSearchFormInput() {
    return element(by.css('.search-form #searchTerm'));
  }

  getSearchFormSubmitButton() {
    return element(by.css('.search-form .btn-search'));
  }

  getPokemonDetailName() {
    return element(by.css('.pokemon-card-detail .header .subtitle'));
  }
}
