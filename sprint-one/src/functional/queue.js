var Queue = function(){
  var someInstance = {};
  var front = 0;
  var back = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[back] = value;
    back += 1;
  };

  someInstance.dequeue = function(){
    var results = storage[front];
    delete storage[front];
    if (front < back){
      front += 1;
    }
    return results;
  };

  someInstance.size = function(){
    return back - front;
  };

  return someInstance;
};

// front of coffee line
                //0         1                             5
//              Jim,    [ Mike, Alice, Bob, Dave]