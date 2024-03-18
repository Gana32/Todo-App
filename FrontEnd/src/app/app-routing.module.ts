import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path: 'create', component:CreateTodoComponent},
  {path: '',component:TasklistComponent},
  {path:'update/:_id',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
