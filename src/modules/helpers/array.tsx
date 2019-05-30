import {groupBy} from 'lodash';
export function sort( array: Array<any>, key: string){
  array.sort(function (x, y) {
    var a = x[key].toUpperCase(),
        b = y[key].toUpperCase();
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
  });
  return array;
}

export function gBy(array: Array<any>, key: string){
  var result = groupBy(array, function(arr) {
    return arr[key];
  });
  return result;
}