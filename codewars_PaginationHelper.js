// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  let arr = collection.slice();
  let new_arr = [];
  for(let i = 0; i < arr.length; i++){
    if(i == itemsPerPage - 1){
      new_arr.push(arr.splice(0, itemsPerPage));
      i = 0;
    } else if(i == arr.length - 1){
      new_arr.push(arr.slice(0, arr.length));
    }
  }
  console.log(new_arr)
  this.page = new_arr;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.page.reduce((a, b) => a.concat(b), []).length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return this.page.length; 
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  let arr = this.page;
  return arr[pageIndex] == undefined ? -1 : arr[pageIndex].length;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
console.log(itemIndex)
  let idx = this.page.reduce((a, b) => a.concat(b), [])[itemIndex];
  console.log(idx)
  if(idx == undefined){
    return -1;
  }
  for(let i = 0; i < this.page.length; i++){
  console.log(i)
    if(this.page[i].includes(idx)){
      return i;
    }
  }
  
}
