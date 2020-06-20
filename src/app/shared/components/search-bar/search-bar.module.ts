import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ], exports : [ SearchBarComponent ]
})
export class SearchBarModule { }
