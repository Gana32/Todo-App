import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/tasks.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css'
})
export class CreateTodoComponent implements OnInit {

  task: Task={
    title:'',
    description:'',
    completed:false
  }

  constructor(private _taskService: TaskService){}

  ngOnInit(): void {
    this._taskService.sendtodoData("Hello form the other side!!!")
}
submitform(): void {
 // console.log('Tasks before sending',this.task)
  this._taskService.createtask(this.task).subscribe(response=>{
    console.log('Task created successfully',response);
    this.resetform();
  }, err=>{
    console.log(err);
  })
}

private resetform():void{
  this.task.title='';
  this.task.description='';
  this.task.completed=false;
}
// updateCompleted(checked: boolean): void {
//   this.task.completed = checked;
// }

}
