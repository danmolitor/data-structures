var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var instance = Object.create(queueMethods);
instance.storage = {};
instance.back = 0;
instance.front = 0;

return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.back] = value;
  this.back += 1;
};

queueMethods.dequeue = function(){
  if (this.front < this.back){
    var result = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;
    return result;
  }
};

queueMethods.size = function(){
  return this.back - this.front;
};


