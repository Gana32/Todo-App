import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  //@Input is basically used to pass the value from the parent component to teh child component here we
  // are using this because wqe are passing the value form app.component.html wher ewe are uising app-header
  //to this header component where we declare showcreatebutton
  @Input() showcreatebutton: boolean = true;


constructor(private router:Router){}

  createtodo(){
this.router.navigate(['/create']);

  }
}
