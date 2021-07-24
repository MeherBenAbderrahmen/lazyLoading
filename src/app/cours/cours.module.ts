import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { CoursComponent } from './cours.component';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { UpdateCoursComponent } from './update-cours/update-cours.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CoursComponent,
    AddCoursComponent,
    UpdateCoursComponent
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CoursModule { }
