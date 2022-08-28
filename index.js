function checkInput(collection) {
    if (Array.isArray(collection) === true) {
      return collection.slice();
    } else {
      return Object.values(collection);
    }
  }
  function myReduce(collection, callback, acc) {
    let newCollection = checkInput(collection);
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
    for (let i = 0; i < newCollection.length; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }
  
  function myEach(collection, callback) {
    const newCollection = checkInput(collection);
    for (let i = 0; i < newCollection.length; i++) {
      callback(newCollection[i]);
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const newCollection = checkInput(collection);
    let newArray = [];
    newCollection.forEach((element) => {
      newArray.push(callback(element));
    });
    return newArray;
  }
  
  
  function myFind(collection, predicate) {
    const newCollection = checkInput(collection);
  
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) return newCollection[i];
    }
  
    return undefined;
  }
  function myFilter(collection, predicate) {
    const newCollection = checkInput(collection);
    const newArr = [];
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) newArr.push(newCollection[i]);
    }
  
    return newArr;
  }
  
  function mySize(collection) {
    const newCollection = checkInput(collection);
    return newCollection.length;
  }
  
  function myFirst(array, n) {
    var result = [];
    if (n === undefined) return array[0];
    for (let i = 0; i < n; i++) {
      result.push(array[i]);
    }
    return result;
  }
  
  function myLast(array, n) {
    if (n == undefined) return array[array.length - 1];
    return array.slice(-n);
  }
  
  function myKeys(object) {
    return Object.keys(object);
  }
  function myValues(object) {
    return Object.values(object);
  }