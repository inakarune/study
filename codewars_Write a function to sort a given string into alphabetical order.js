function sort(str) {
var sss = '';
var arr = [];
var arr_num = [];
var arr_s = [];
var find_lower = /[a-zA-Z]/g;

      if (/[^a-zA-Z0-9\s]/g.test(str)){
              arr_s = str.match(/[^a-zA-Z0-9\s]/g).sort();
          }
          if (/\d/g.test(str)){
              arr_num = str.match(/\d/g).sort();
          }
          if (/[a-zA-Z]/g.test(str)){
              arr = str.match(find_lower).sort(sortab);
          }
    
    sss = arr.join('') + arr_num.join('') + arr_s.join('');
    
    function sortab (a, b){
      var aa = a.toLowerCase();
      var bb = b.toLowerCase();
      //return a.toLowerCase().localeCompare(b.toLowerCase());
      if (aa > bb) return 1;
      if (aa < bb) return -1;
      if (aa === bb){
          if (a.charCodeAt(0) > b.charCodeAt(0)){
            return 1; 
          } else if (a.charCodeAt(0) < b.charCodeAt(0)){
            return -1;
          } else {
            return 0;
          }
          
      }
    }
    
 return sss
}
