import { Component } from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrl: './fizzbuzz.component.scss'
})
export class FizzbuzzComponent {

  constructor(){

  }
  
  avvia(){
    
    for (let i = 0; i < 100; i++){
      if(i % 15 == 0 && i != 0){
        console.log(i + " - fizzbuzz")
      } else if (i % 3 == 0 && i != 0){
        console.log(i + " - fizz")
      } else if (i % 5 == 0 && i != 0){
        console.log(i + " - buzz")
      } else (
        console.log(i)
      )
    }
  }
}
