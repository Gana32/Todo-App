import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/tasks.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit, OnDestroy {

  receivedata:String = '';

   task:Task[]=[]

   private subscription:Subscription;

 // tasking:any[]=[];
  private tododataSubscription: Subscription;

  constructor(private _taskservice:TaskService,private router:Router) { 
//     this.subscription=this._taskservice.tasks$.subscribe(tasks =>
//  {     this.task=tasks
//   });
}



  ngOnInit(): void {
      this.tododataSubscription=this._taskservice.gettodoData().subscribe(todoData=>{
       // this.tasking.push(todoData);
       this.receivedata=todoData;
        console.log(this.receivedata);
      });

      this.getTask();
  }

  getTask(){
    this._taskservice.gettasks().subscribe((data:Task[])=>{
      this.task=data;
      console.log(this.task);
    }, err=>
    {
      console.log('Error Fetching the companies',err);
    })
  }

deletetask(taskId:string | undefined):void{
if(!taskId){
  console.error('Task not found');
  return;
}    
if(confirm('Are you sure want to delete this task?')){
  this._taskservice.deletetask(taskId).subscribe(response=>{
    console.log('Task deleted successfully',response);
    this.getTask();
  }, err=>{
    console.log(err);
  })
}

}

updateTask(taskId:string | undefined):void{

  if(taskId){
    this.router.navigate(['/update',taskId]);
  }
  else{
    console.error("Cannot navigate id doesn't exist");
  }
} 

  ngOnDestroy(): void {
    this.tododataSubscription.unsubscribe();
  }


}
