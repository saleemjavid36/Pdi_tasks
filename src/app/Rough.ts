<tr ng-repeat="row in rows track by $index" ng-click="selectRow($event, $index)" ng-class="{highlitedRow: isRowSelected($index)}">


var selectedRowsIndexes: any[] = [];
$scope.rows = [{name: 'Happy Butterfly'}, {name: 'Wonderful Bee'}];


$scope.selectRow = function(event, rowIndex) {
  if(event.ctrlKey) {
      changeSelectionStatus(rowIndex);
  } else if(event.shiftKey) {
      selectWithShift(rowIndex);
  } else {
      selectedRowsIndexes = [rowIndex];
  }
  console.log(selectedRowsIndexes);
  console.log(getSelectedRows());
  console.log(getFirstSelectedRow());
};

function selectWithShift(rowIndex) {
  var lastSelectedRowIndexInSelectedRowsList = selectedRowsIndexes.length - 1;
  var lastSelectedRowIndex = selectedRowsIndexes[lastSelectedRowIndexInSelectedRowsList];
  var selectFromIndex = Math.min(rowIndex, lastSelectedRowIndex);
  var selectToIndex = Math.max(rowIndex, lastSelectedRowIndex);
  selectRows(selectFromIndex, selectToIndex);
}

function getSelectedRows() {
  var selectedRows = [];
  angular.forEach(selectedRowsIndexes, function(rowIndex) {
    selectedRows.push($scope.rows[rowIndex]);
  });
  return selectedRows;
}

selectedRowsIndexes
EmpData
function getFirstSelectedRow() {
  var firstSelectedRowIndex = selectedRowsIndexes[0];
  return $scope.rows[firstSelectedRowIndex];
}

function selectRows(selectFromIndex, selectToIndex) {
  for(var rowToSelect = selectFromIndex; rowToSelect <= selectToIndex; rowToSelect++) {
    select(rowToSelect);
  }
}

function changeSelectionStatus(rowIndex) {
  if($scope.isRowSelected(rowIndex)) {
      unselect(rowIndex);
  } else {
      select(rowIndex);
  }
}

function select(rowIndex) {
  if(!$scope.isRowSelected(rowIndex)) {
      selectedRowsIndexes.push(rowIndex)
  }
}

function unselect(rowIndex) {
  var rowIndexInSelectedRowsList = selectedRowsIndexes.indexOf(rowIndex);
  var unselectOnlyOneRow = 1;
  selectedRowsIndexes.splice(rowIndexInSelectedRowsList, unselectOnlyOneRow);
}

function resetSelection() {
  selectedRowsIndexes = [];
}

$scope.isRowSelected = function(rowIndex) {
  return selectedRowsIndexes.indexOf(rowIndex) > -1;
};

});