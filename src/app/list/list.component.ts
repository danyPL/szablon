import { Component,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})
export class ListComponent {
  items:{text:string,date:string}[] = []
  @ViewChild("text") text?: ElementRef;

// nie pokazywał pan jak działa ViewChild, w związku z tym nie ma możliwości napisać podanego kodu.

  addTodo(){
    const item = {
      text: this.text?.nativeElement.value,
      date: `Dodano: ${new Date().toLocaleString()}`
    }
    
  this.items.push(item);
    
  }
  
}
