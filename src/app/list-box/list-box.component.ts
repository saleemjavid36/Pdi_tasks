import { Component ,HostListener } from '@angular/core';

import availablefieldsdata from '../../assets/Data/availableFields.json'
import toDisplayFields from '../../assets/Data/toDisplayField.json'
import { listbox } from '../Interfaces/listBox-interface';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.scss']
})
export class ListBoxComponent {

  @HostListener('document:keydown.arrowup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    console.log('Up arrow key pressed');
  }

  availableFields:listbox[]=availablefieldsdata
  selectedLeftBoxRowsIndexes :any[]=[]
  listLeftBoxROws1:any[]=[]
  leftBoxrowSelectedIndex=1


  toDisplayField:listbox[]=toDisplayFields
  listRightBoxROws2:any[]=[]
  selectedRightBoxRowsIndexes :any[]=[]


  // left box

  leftBoxHighlightedRow(evnt:any,id:any){

    if(evnt.ctrlKey){
      this.changeSelectionStatus(id)
    }else{
      this.selectedLeftBoxRowsIndexes=[id]
      
    }
    this.listLeftBoxROws1=this.getLeftBoxRows(id)
  }

  changeSelectionStatus(id:any){
    if(this.rowSelected(id)){
      this.unselect(id)
    }else{
      this.select(id)
    }
  }

  rowSelected(id:any){
    // console.log(id)
    return this.selectedLeftBoxRowsIndexes.indexOf(id) > -1
  }

  unselect(id:any){
    window.confirm("changes Have bee made Please confirm")
    var rowIndexInSelectedRowsList =this.selectedLeftBoxRowsIndexes.indexOf(id)
    var unselectOnlyOneRow =1;
    this.selectedLeftBoxRowsIndexes.splice(rowIndexInSelectedRowsList,unselectOnlyOneRow)
  }
  
  select(id:any){
    if(!this.rowSelected(id)){
      this.selectedLeftBoxRowsIndexes.push(id)
    }
  }
  // Getting Data Of Selected Left Box rows

  getLeftBoxRows(id:any){
    var selectedRows :any[]=[];
    for (let index of this.selectedLeftBoxRowsIndexes) {
      let matchingItem = this.availableFields.find(item => item.id === index);
      if (matchingItem) {
        selectedRows.push(matchingItem);
      }
    }
    return selectedRows
  }


  // right box
  rightBoxHighlightedRow(evnt:any,id:any){
    // console.log(id)
    // console.log(this.selectedRightBoxRowsIndexes)
    if(evnt.ctrlKey){
      this.changeSelectionStatusRightBox(id)
    }else{
      this.selectedRightBoxRowsIndexes=[id]
    }

    this.listRightBoxROws2=this.getRightBoxRows(id)
  }

  rightrowSelected(id:any){

    return this.selectedRightBoxRowsIndexes.indexOf(id) > -1
  }

  changeSelectionStatusRightBox(id:any){
    // console.log(id)
    if(this.rightrowSelected(id)){
      this.unselectRight(id)
    }else{
      this.selectRight(id)
    }
  }

  unselectRight(id:any){
    var rowIndexInSelectedRowsListright =this.selectedRightBoxRowsIndexes.indexOf(id)
    var unselectOnlyOneRow =1;
    this.selectedRightBoxRowsIndexes.splice(rowIndexInSelectedRowsListright,unselectOnlyOneRow)
  }
  
  selectRight(id:any){
    if(!this.rightrowSelected(id)){
      this.selectedRightBoxRowsIndexes.push(id)
    }
  }

  getRightBoxRows(id:any){
    var selectedRows :any[]=[];
    for (let index of this.selectedRightBoxRowsIndexes) {
      let matchingItem = this.toDisplayField.find(item => item.id === index);
      if (matchingItem) {
        selectedRows.push(matchingItem);
      }
    }
    return selectedRows
  }


  // Add function event
  onClickAdd(){
    for (let item of this.listLeftBoxROws1) {
      // Find the index of the item in availableFields that matches the current item in listLeftBoxROws1
      let index = this.availableFields.findIndex(availableItem => availableItem.id === item.id);
  
      // If a matching item is found, splice it from availableFields and push it to toDisplayField
      if (index !== -1) {
        let splicedItem = this.availableFields.splice(index, 1)[0];
        this.toDisplayField.push(splicedItem);
      }
    }
  }
  
  // remove Function

  onClickRemove(){
    for(let item of this.listRightBoxROws2){
      let index= this.toDisplayField.findIndex(availableItem=>availableItem.id === item.id);

      if(index !== -1){
        let splicedItem= this.toDisplayField.splice(index,1)[0];
        this.availableFields.push(splicedItem)
      }
    }
  }

  moveUp(){
    if (this.selectedRightBoxRowsIndexes.length > 0) {
      const currentIndex = this.toDisplayField.findIndex(e => e.id === this.selectedRightBoxRowsIndexes[0]);
  
      if (currentIndex > 0) {
        const previousObject = this.toDisplayField[currentIndex - 1];
        console.log(previousObject);
        this.selectedRightBoxRowsIndexes[0] = previousObject.id; // Update the selectedRightBoxRowsIndexes with the previous object's id if needed
      } else {
        console.log("No previous object available.");
      }
    }
  }
  moveDown(){
    if (this.selectedRightBoxRowsIndexes.length > 0) {
      const currentIndex = this.toDisplayField.findIndex(e => e.id === this.selectedRightBoxRowsIndexes[0]);
      if (currentIndex > 0) {
        const previousObject = this.toDisplayField[currentIndex + 1];
        console.log(previousObject);
        this.selectedRightBoxRowsIndexes[0] = previousObject.id;
      } else {
        console.log("No previous object available.");
      }
    }
  }
  mouseover(e:any){
   if(e.buttons===1){
    console.log(e.srcElement)
   }
  }
}
