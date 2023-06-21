import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tablerow-select',
  templateUrl: './tablerow-select.component.html',
  styleUrls: ['./tablerow-select.component.scss']
})
export class TablerowSelectComponent {
   
  

  @ViewChild('trElement') trelement : ElementRef<HTMLElement> | any


  // row selection context menu
  rightClickMenuPositionX: number | any;
  rightClickMenuPositionY: number | any;
  contextmenu=false
  // row selection variables
  selectedRowsIndexes :any[]=[]
  selectedRowsData:any[]=[]
  clickedOutside=false
  selectedRowIndex = -1;
  
  EmpData  =[
    {
      "Id": 1,
      "FirstName": "Johannah",
      "LastName": "Kiffin",
      "Email": "jkiffin0@google.pl",
      "Gender": "F",
      "JobTitle": "Administrative Assistant I"
    }, {
      "Id": 2,
      "FirstName": "Eldin",
      "LastName": "Astbery",
      "Email": "eastbery1@geocities.jp",
      "Gender": "M",
      "JobTitle": "Senior Editor"
    }, {
      "Id": 3,
      "FirstName": "Nahum",
      "LastName": "Mounce",
      "Email": "nmounce2@vk.com",
      "Gender": "M",
      "JobTitle": "Programmer II"
    }, {
      "Id": 4,
      "FirstName": "Gallard",
      "LastName": "Standell",
      "Email": "gstandell3@europa.eu",
      "Gender": "M",
      "JobTitle": "Account Representative II"
    }, {
      "Id": 5,
      "FirstName": "Koenraad",
      "LastName": "Domleo",
      "Email": "kdomleo4@cornell.edu",
      "Gender": "M",
      "JobTitle": "Quality Control Specialist"
    }, {
      "Id": 6,
      "FirstName": "Uriah",
      "LastName": "Turbat",
      "Email": "uturbat5@aol.com",
      "Gender": "M",
      "JobTitle": "Accounting Assistant II"
    }, {
      "Id": 7,
      "FirstName": "Waldemar",
      "LastName": "Fowley",
      "Email": "wfowley6@sun.com",
      "Gender": "M",
      "JobTitle": "Account Coordinator"
    }, {
      "Id": 8,
      "FirstName": "Rodolfo",
      "LastName": "Trenchard",
      "Email": "rtrenchard7@yandex.ru",
      "Gender": "M",
      "JobTitle": "Data Coordiator"
    }, {
      "Id": 9,
      "FirstName": "Konstance",
      "LastName": "Dudek",
      "Email": "kdudek8@techcrunch.com",
      "Gender": "F",
      "JobTitle": "Administrative Assistant I"
    }, {
      "Id": 10,
      "FirstName": "Monti",
      "LastName": "Perton",
      "Email": "mperton9@youtube.com",
      "Gender": "M",
      "JobTitle": "Operator"
    },
    {
      "Id": 11,
      "FirstName": "david",
      "LastName": "nun",
      "Email": "david@youtube.com",
      "Gender": "M",
      "JobTitle": "software"
    },
    
  ];

// this is the main for controll and shift select
  highlightedRow(event:any,indexEmp:any,){
    console.log(indexEmp)
    this.selectedRowIndex=indexEmp
    if(event.ctrlKey){
      this.changeSelectionStatus(indexEmp)
    }else if(event.shiftKey){
      this.selectWithShift(indexEmp)
    } else {
      this.selectedRowsIndexes=[indexEmp]
    }
    
    
   
    // console.log(this.selectedRowsIndexes);
    console.log(this.getSelectedRows());
    // console.log(this.getFirstSelectedRow());
    this.selectedRowsData=this.getSelectedRows();
  }



  changeSelectionStatus(indexEmp: any){
    if(this.isRowSelected(indexEmp)){
      this.unselect(indexEmp)
    }else{
      this.select(indexEmp);
    } 
  }

  isRowSelected(rowIndex:any){
    return this.selectedRowsIndexes.indexOf(rowIndex) > -1
  }

  unselect(rowIndex:any){
    var rowIndexInSelectedRowsList =this.selectedRowsIndexes.indexOf(rowIndex)
    var unselectOnlyOneRow =1;
    this.selectedRowsIndexes.splice(rowIndexInSelectedRowsList,unselectOnlyOneRow)
  }


  select(rowIndex:any){
    if(!this.isRowSelected(rowIndex)){
      this.selectedRowsIndexes.push(rowIndex)
    }
  }


  // consoles

  getSelectedRows(){
    var selectedRows :any[]=[];
    this.selectedRowsIndexes.forEach((rowIndex:any) => {

      selectedRows.push(this.EmpData[rowIndex]);
    });
    return selectedRows
  }

  getFirstSelectedRow(){
    var firstSelectedRowIndex = this.selectedRowsIndexes[0];
    return this.EmpData[firstSelectedRowIndex]
  }


  selectWithShift(rowIndex:any){
    var lastSelectedRowIndexInSelectedRowsList = this.selectedRowsIndexes.length - 1;
    var lastSelectedRowIndex = this.selectedRowsIndexes[lastSelectedRowIndexInSelectedRowsList];
    var selectFromIndex = Math.min(rowIndex, lastSelectedRowIndex);
    var selectToIndex = Math.max(rowIndex, lastSelectedRowIndex);
    this.selectRows(selectFromIndex,selectToIndex)
  }

  selectRows(selectFromIndex: number, selectToIndex: number){
    for(var rowToSelect = selectFromIndex; rowToSelect <= selectToIndex; rowToSelect++) {
      this.select(rowToSelect);
    }
  }


  // other events

  clickOutsideTheRow(e:any){
    if(e.target.localName==="td"){
      this.clickedOutside=false
    }else{
      this.contextmenu=false
      this.clickedOutside=true
    }
  }

  onSelectingMultiple(e:any){
    this.contextmenu=true
    console.log(e)
    this.rightClickMenuPositionX=e.clientX
    this.rightClickMenuPositionY=e.clientY

    console.log(this.rightClickMenuPositionX,this.rightClickMenuPositionY)
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.keyCode == 38 ){
      this.selectedRowsIndexes[0] --
     
    }else if(event.keyCode ==40){
      this.selectedRowsIndexes[0] ++
    }
  }
}
