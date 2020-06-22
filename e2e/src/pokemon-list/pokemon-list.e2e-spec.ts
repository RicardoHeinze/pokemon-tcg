import { PokemonListPage } from './pokemon-list.po';
import { browser, logging } from 'protractor';

describe('pokemon-list-page ', () => {
  let page: PokemonListPage;
  let searchedPokemon: string = 'Charizard';

  beforeEach(() => {
    page = new PokemonListPage();
  });

  it('should display a list of pokemons', () => {
    page.navigateTo();
    expect(page.getPokemonCardElements().count()).toBeGreaterThan(0);
  });

  it('should set a value in the search input and perform a search', () => {
    page.getSearchFormInput().sendKeys(searchedPokemon);
    page.getSearchFormSubmitButton().click();
  });

  it('should click the first pokemon and check his name after navigate', () => {
    page.getFirstPokemonCardElement().click();
    expect(page.getPokemonDetailName().getText()).toContain(searchedPokemon);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
