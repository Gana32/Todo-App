import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/tasks.model';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {

  taskId:string;
  task:Task={
    title:'',
    description:'',
    completed:false
  }

  constructor(private tasksservice:TaskService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.taskId=this.route.snapshot.paramMap.get('_id');
 console.log(typeof(this.taskId))
 console.log(this.taskId)

  this.tasksservice.gettask(this.taskId).subscribe(data=>{
    console.log(data);
    this.task=data;
  })
  }

  updateTask():void{
this.tasksservice.updatetask(this.taskId,this.task).subscribe((updatedtask:Task)=>{
  console.log("Task updated Successfully:",updatedtask);
  this.router.navigate(['/']);
},
(err)=>{
  console.log('Cannot update the company',err);
})
  }
}

