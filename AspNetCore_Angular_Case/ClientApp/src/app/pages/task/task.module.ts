import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task.component';


const routes: Routes = [
  { path: '', component: TaskComponent }
];

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TaskModule { }
