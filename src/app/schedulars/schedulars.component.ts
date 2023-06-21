import { Component } from '@angular/core';

@Component({
  selector: 'app-schedulars',
  templateUrl: './schedulars.component.html',
  styleUrls: ['./schedulars.component.scss']
})
export class SchedularsComponent {
  isOpened:boolean=true
  is2Opened:boolean=true
  is3Opened:boolean=true

  visible: boolean = false;
  onClickAustin(){
    this.isOpened=!this.isOpened
  }
  isaustin2(){
    this.is2Opened=!this.is2Opened
  }

  istestOpened(){
    this.is3Opened=!this.is3Opened
  }

  showDialog() {
    this.visible = true;
}
}
