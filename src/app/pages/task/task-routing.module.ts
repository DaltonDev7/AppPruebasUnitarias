import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaksResolver } from './resolvers/taks.resolver';
import { GetTasksIdResolver } from './resolvers/get-tasks-id.resolver';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
    resolve: {
      tasks: TaksResolver
    }
  },
  {
    path: 'add',
    component: TaskAddComponent
  },
  {
    path: 'edit/:id',
    component: TaskEditComponent,
    resolve: {
      task : GetTasksIdResolver
    }
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class TaskRoutingModule { }
