var chocolateBars = new Array (
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  );
  
  function addElementToBeginningOfArray (a, b) {
    return [b, ...a];
  }
  
  function destructivelyAddElementToBeginningOfArray (a, b) {
    a.unshift(b);
    return a;
  }
  
  function addElementToEndOfArray (a, b) {
    a.push(b);
  }
  
  function accessElementInArray (a, b) {
    return a[b];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray (a) {
    a.shift();
    return a;
  }
  
  function removeElementFromBeginningOfArray (a) {
    return a.slice(1);
  }
  
  function destructivelyRemoveElementFromEndOfArray (a) {
    a = a.pop();
    return a;
  }
  
  function removeElementFromEndOfArray(a) {
    return a.slice(0, a.length - 1);
  }