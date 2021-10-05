import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AppComponent } from './app.component';
 
const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'todo-app', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  TodoListComponent,
  AppComponent
]