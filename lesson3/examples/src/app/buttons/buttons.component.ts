import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   active: boolean = true;
   buttonStatus: boolean[] = [true, true, true];
   location: string = 'center'
   // goldInactive: boolean = false;
   //silverInactive: boolean = false;
   // copperInactive: boolean = false;
   changeButton: boolean = false;
   buttonAlign: string = 'text-align: right'
   specialFactor: boolean = false;

   constructor() { }

   ngOnInit() { }

   reactivateButtons() {
      for (let i=0; i< this.buttonStatus.length; i++) {
         this.buttonStatus[i] = true;
      }
      return this.buttonStatus
   }

  shiftLocation(oldLocation:string) {
     while (this.location === oldLocation) {
      this.location = ['left', 'right', 'center'][Math.floor(Math.random()*3)];

     }
     return this.location;
  }

}
