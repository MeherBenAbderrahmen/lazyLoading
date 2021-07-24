import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { CoursComponent } from './cours.component';
import { UpdateCoursComponent } from './update-cours/update-cours.component';

const routes: Routes = [
  { path: '', component: CoursComponent },
  { path: 'addCours', component: AddCoursComponent },
  { path: 'updateCours/:id', component: UpdateCoursComponent }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
