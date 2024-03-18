import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    HeaderComponent,
    CreateTodoComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
