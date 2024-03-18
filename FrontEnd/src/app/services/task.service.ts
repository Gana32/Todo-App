import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/tasks.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {


  public todoSubject=new Subject<string>();
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();


  private baseURL='http://localhost:3003/todo'

  constructor(private http:HttpClient) {
    this.gettasks();  
  }

  sendtodoData(Data){
    this.todoSubject.next(Data);
    console.log("sendtodoData is evoked");
  }
  gettodoData():Observable<any>{
    return this.todoSubject.asObservable();
  }

  // gettoData():Subject<string>{
  //   return this.todoSubject;
  // }

  createtask(tasks: Task):Observable<Task>{
 return this.http.post<Task>(`${this.baseURL}/create`,tasks);
  }
  gettasks():Observable<Task[]>{
   // gettasks(){
    return this.http.get<Task[]>(`${this.baseURL}/getAll`)
    // .subscribe(tasks =>{
    //   this.tasksSubject.next(tasks);
   // });
  }
  gettask(id:string):Observable<Task>{
    return this.http.get<Task>(`${this.baseURL}/getbyid/${id}`);
  }
  deletetask(id:string):Observable<Task>{
    return this.http.delete<Task>(`${this.baseURL}/delete/${id}`);
  }
  updatetask(id:string,tasks:Task):Observable<Task>{
    return this.http.put<Task>(`${this.baseURL}/update/${id}`,tasks);
  }
}
