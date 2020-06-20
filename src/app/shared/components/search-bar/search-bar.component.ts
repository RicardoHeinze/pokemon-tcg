import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent implements OnInit {
  searchForm: FormGroup
  searchedName: string;
  activatedRouteSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRouteSubscription = this.activatedRoute.params.pipe(first()).subscribe(params => {
      this.searchedName = params['name'];
    });
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchTerm: new FormControl(this.searchedName)
    });
  }

  search(): void {
    if (this.searchForm.invalid)
      return;

    this.router.navigate([`/busca/${this.searchForm.get('searchTerm').value}`]);
  }
}
