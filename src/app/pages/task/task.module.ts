import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskRoutingModule } from './task-routing.module';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';
import { TaksResolver } from './resolvers/taks.resolver';
import { GetTasksIdResolver } from './resolvers/get-tasks-id.resolver';

@NgModule({
  declarations: [
    TaskAddComponent,
    TaskEditComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    TaskService,
    TaksResolver,
    GetTasksIdResolver
  ]
})
export class TaskModule { }
