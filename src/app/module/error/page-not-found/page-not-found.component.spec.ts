import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageNotFoundComponent } from './page-not-found.component';
import { By } from '@angular/platform-browser';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Checking HTML Content', () => {
    it('Must have a text: Página não encontrada', () => {
      fixture.detectChanges();
      let de = fixture.debugElement.query(By.css('.subtitle')).nativeElement;

      expect(de.innerText).toContain('Página não encontrada');
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
