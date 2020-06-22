import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Checking Form Behavior', () => {
    const searchedTerm = 'charizard';

    it(`should have a text: "${searchedTerm}"`, async(() => {
      component.searchForm.controls['searchTerm'].setValue(`${searchedTerm}`);
      expect(component.searchForm.controls['searchTerm'].value === searchedTerm).toBeTruthy();
    }));

    it(`form should be valid`, async(() => {
      component.searchForm.controls['searchTerm'].setValue('blastoise');
      expect(component.searchForm.valid).toBeTruthy();
    }));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
