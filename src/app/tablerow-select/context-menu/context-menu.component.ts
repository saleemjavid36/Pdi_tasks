import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent {
  @Input() x:any
  @Input() y:any
  @Input() contextmenu:boolean | any
  @Input() selectedIds:boolean | any

  ngOnInit(){
    console.log(this.selectedIds)
  }


  getRightClickMenuStyle() {
    return {
      position: 'fixed',
      left: `${this.x +20}px`,
      top: `${this.y}px`
    }
  }
}
