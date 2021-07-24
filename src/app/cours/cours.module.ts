import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { CoursComponent } from './cours.component';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { UpdateCoursComponent } from './update-cours/update-cours.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CoursComponent,
    AddCoursComponent,
    UpdateCoursComponent
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    SharedModule
  ]
})
export class CoursModule { }
